import { Untar } from "https://deno.land/std@0.76.0/archive/tar.ts";
import { ensureDir, ensureFile } from "https://deno.land/std@0.76.0/fs/mod.ts";

import { gzipDecode } from "https://deno.land/x/wasm_gzip@v1.0.0/mod.ts";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const decoder = new TextDecoder();

ensureDir("docs");

const org = "denosaurs";
const octokit: typeof Octokit & any = new Octokit({
  auth: Deno.args[0],
});

const repos = (await octokit.repos.listForOrg({
  org,
  type: "sources",
})).data;

const sidebar: any = {};

for (const repo of repos) {
  // skip this repo
  if (repo.name === "website") {
    continue;
  }

  try {
    // make sure repo has docs path
    await octokit.repos.getContent({
      owner: org,
      repo: repo.name,
      path: "docs",
    });

    // download repo
    const targz = new Uint8Array(
      (await octokit.repos.downloadArchive({
        owner: org,
        repo: repo.name,
        archive_format: "tarball",
      })).data,
    );

    const tarbuf = new Deno.Buffer(gzipDecode(targz));
    const tar = new Untar(tarbuf);

    for await (const entry of tar) {
      if (entry.fileName === "pax_global_header") {
        continue;
      }

      const root = entry.fileName.split("/")[0];
      const name = entry.fileName.replace(root, "").substring(1);

      if (name === "docs/sidebar.json") {
        sidebar[repo.name] = JSON.parse(
          decoder.decode(await Deno.readAll(entry)),
        );
      } else if (name.startsWith("docs/")) {
        const path = name.replace("docs", `docs/${repo.name}`);

        if (entry.type === "directory") {
          await ensureDir(path);
          continue;
        }

        await ensureFile(path);
        const file = await Deno.open(path, { write: true });
        await Deno.copy(entry, file);
      }
    }
  } catch (e) {
    if (e.status !== 404) {
      throw e;
    }
  }
}

await Deno.writeTextFile(
  "sidebars.js",
  `module.exports = ${JSON.stringify(sidebar, null, 2)};\n`,
);
