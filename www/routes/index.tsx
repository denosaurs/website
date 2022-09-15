import { Head } from "$fresh/src/runtime/head.ts";
import NavigationBar from "../components/NavigationBar.tsx";
import Footer from "../components/Footer.tsx";

export default function Index() {
  const main = `max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4 `;
  const text = `text-white`;

  return (
    <div class="bg-gray-800">
      <Head>
        <title>Denosaurs</title>
        <meta
          name="description"
          content="deno.land module wizards"
        />
      </Head>
      <NavigationBar active="/" />
      <Hero />
      <Projects />
      <section class={main}>
        <div class={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Hero() {
  const container =
    `w-full h-64 flex justify-center items-center flex-col bg-blue-100 `;
  const header = `max-w-md`;
  const subtitle = `max-w-screen-sm mt-4 text(2xl gray-600 center)`;
  return (
    <section class={container}>
      <img class={header} src="/logo.svg" width="150rem" />
      <p class={subtitle}>
        Developing deno.land modules such as denon, created by{" "}
        <a href="https://github.com/notfilippo">notfilippo</a> &{" "}
        <a href="https://github.com/eliassjogreen">eliassjogreen</a>
      </p>
    </section>
  );
}

function Projects() {
  return (
    <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
      <ProjectCard
        name="netsaur"
        description="Powerful machine learning, accelerated by WebGPU"
        url="https://github.com/denosaurs/netsaur"
      />
      <ProjectCard
        name="neo"
        description="👩‍💻 Matrix and other math, accelerated by WebGPU and WASM"
        url="https://github.com/denosaurs/neo"
      />
      <ProjectCard
        name="deno python"
        description="🐍 Python interpreter bindings for Deno."
        url="https://github.com/denosaurs/deno_python"
      />
      <ProjectCard
        name="plug"
        description="🔌 Deno plugin management library"
        url="https://github.com/denosaurs/plug"
      />
    </div>
  );
}

function ProjectCard(props: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <a href={props.url}>
      <div class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
        <div class="bg-indigo-500  flex h-20  items-center">
          <p class="ml-4 text-white uppercase">{props.name}</p>
        </div>
        <p class="py-6 px-6 text-lg tracking-wide text-center">
          {props.description}
        </p>
        <div class="flex justify-center px-5 mb-2 text-sm ">
        </div>
      </div>
    </a>
  );
}
