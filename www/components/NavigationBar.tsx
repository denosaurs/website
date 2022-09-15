export default function NavigationBar(props: { active: string }) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Docs",
      href: "/docs",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  return (
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://github.com/denosaurs" class="flex items-center">
          <img
            src="/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Denosaurs Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
            Denosaurs
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none  focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class={`flex justify-center gap-8 mx-4`}>
            {items.map((item) => (
              <li>
                <a
                  href={item.href}
                  class={` hover:underline ${
                    props.active == item.href ? "font-bold text-gray-200" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
