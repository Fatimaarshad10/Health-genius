const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Doctors', href: '#' },
  { name: 'Facilities', href: '#' },
  { name: 'More', href: '#' },
]

function Navbar() {
  return (
    <div>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className="text-3xl text-indigo-900 font-bold mr-2">Health
              <span className="text-3xl font-bold text-black">Genius</span>
            </h1>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-indigo-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-gray-400 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">

            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-indigo-200 md:dark:bg-white dark:border-indigo-700">
              {navigation.map((item) => (
                <li key={item.name} >
                  <a href={item.href} class="block py-2 px-3 mt-4 text-center md:text-black rounded hover:bg-indigo-50 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-indigo-300 dark:hover:bg-indigo-400 dark:hover:text-white" aria-current="page">{item.name}</a>
                </li>
              ))}
              <li>
                <div className="flex items-center gap-x-2 flex-col md:flex-row ">
                  <button
                    className="rounded-full md:bg-indigo-400 px-5 py-3 text-l font-semibold text-black 
                    hover:bg-indigo-50   dark:hover:text-indigo-300  "
                  >
                    Sign In
                  </button>
                  <button
                    className="rounded-full md:bg-indigo-900 px-5 py-3 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                  >
                    Sign Up
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
