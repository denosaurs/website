---
title: Script Options
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Example for now are mostly in JSON, tabs for other formats will
be available soon.
:::

**Denon** takes inspiration from the awesome [velociraptor](https://github.com/umbopepato/velociraptor) module in the way it handles scripts.

## Scripts

Scripts are declared inside the `scripts` object and are identified by a name:

<Tabs
groupId="configuration-format"
defaultValue="json"
values={[
{label: 'JSON', value: 'json'},
{label: 'YML', value: 'yaml'},
{label: 'Typescript', value: 'typescript'},
]}>
<TabItem value="json">

```json title="denon.json"
{
  "scripts": {
    // they all resolve to `deno run app.ts` when you run `denon start`
    "start": "app.ts",
    // OR
    "start": "run app.ts",
    // OR
    "start": "deno run app.ts"
  }
}
```

</TabItem>
<TabItem value="yaml">

```yml title="denon.yml"
scripts:
  # they all resolve to `deno run app.ts` when you run `denon start`
  start: "app.ts"
  # OR
  start: "run app.ts"
  # OR
  start: "deno run app.ts"
```

</TabItem>
<TabItem value="typescript">

```typescript title="template for denon.config.ts"
import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    // they all resolve to `deno run app.ts` when you run `denon start`
    start: "app.ts",
    // OR
    start: "run app.ts",
    // OR
    start: "deno run app.ts",
  },
};

export default config;
```

</TabItem>
</Tabs>

Scripts can also be defined by a complex object:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      // with an optional description that
      // is shown when you run `denon` to list
      // all the scripts
      "desc": "Run the main server.",

      // available options...
      // they are described in the next paragraph
      "allow": ["env", "write"],
      "unstable": true

      // running `denon start` will resolve in
      // deno run --allow-env --allow-write --unstable app.ts
    }
  }
}
```

## Script Options

Options can be script specific or be declared as global in the root of the config file.

### Environment variables

Environment variables can be provided as an object and are passed directly to the child process.

```json
{
  // globally applied to all scripts
  "env": {
    "TOKEN": "SUPER SECRET TOKEN"
  },

  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "env": {
        "PORT": 3000
      }
    }
  }
}
```

### Permissions

Permission can be granted to child processes. You can provide specific permissions for each script,
but you can also declare permissions globally, following the same format.

```json
{
  // globally applied to all scripts
  // as object ...
  "allow": {
    "read": "/etc,/tmp", // --allow-read=/etc,/tmp
    "env": true // --allow-env
  },
  // ... or as array
  "allow": [
    "run", // --allow-run
    "net" // --allow-net
  ],

  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      // specific for a single script
      // as object ...
      "allow": {
        "read": "/etc,/tmp", // --allow-read=/etc,/tmp
        "env": true // --allow-env
      },
      // ... or as array
      "allow": [
        "run", // --allow-run
        "net" // --allow-net
      ]
    }
  }
}
```

### File watching

While file watching is a core feature of `denon` you always have the option
of disabling file watching and run a script only once:

```json
{
  // globally applied to all scripts
  // now denon will essentialy be a script runner
  "watch": false,

  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      // you can still enable watch on a script-by-script basis
      "watch": true
    }
  }
}
```

### Import Map

Load import map file. Take a look a at the [official docs](https://deno.land/manual/linking_to_external_code/import_maps) for additional info.

:::caution
This feature in unstable in the current version of the deno executable.
:::

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "importmap": "importmap.json"
    }
  }
}
```

### TS config

Load tsconfig.json configuration file:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "tsconfig": "tsconfig.json"
    }
  }
}
```

### Unstable

Enable if the script is using unstable features of deno stdlib:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "unstable": true
    }
  }
}
```

### Inspect and InspectBrk

Activate inspector on `host:port`. If `inspectBrk` is used the executions breaks at the start of the user script:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "inspect": "127.0.0.1:9229",
      // OR
      "inspectBrk": "127.0.0.1:9229"
    }
  }
}
```

#### Lockfile

Check the specified lock file:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "lock": "lock.json"
    }
  }
}
```

### Cert

Load certificate authority from PEM encoded file:

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "cert": "cert.pem"
    }
  }
}
```

### Log

Set log level: (possible values: `debug`, `info`)

```json
{
  "scripts": {
    "start": {
      "cmd": "deno run app.ts",
      "desc": "Run the main server.",

      "log": "debug" // or "info"
    }
  }
}
```
