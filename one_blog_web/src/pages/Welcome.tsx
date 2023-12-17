import { Link } from 'react-router-dom'
import { TbArrowRight, TbPhotoFilled, TbUserCircle } from 'react-icons/tb'

const latestPost = [1, 2, 3, 4, 5, 6]
const featuredWriters = [1, 2, 3, 4, 5, 6, 7, 8]

const Welcome = () => {
  return (
    <main className='overflow-auto custom-scrollbar'>
      {/* WELCOME SECTION */}
      <section className="pt-24 bg-white dark:bg-gray-900">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>¿Buscas</span>
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-rose-400 to-purple-500 lg:inline"> nuevas historias</span>
              <span> o quieres</span>
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-rose-400 to-purple-500 lg:inline"> compartir</span>
              <span> tus experiencias?</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Únete a nuestra comunidad de blogueros para compartir nuevas historias, experiencias y conocimientos sobre los mas diversos temas.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link to="/signin" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-rose-400 rounded-2xl sm:w-auto sm:mb-0">
                Entrar
              </Link>
              <Link to="/signup" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                Crear cuenta
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center flex-none px-4 bg-rose-400 rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LATEST SECTION */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Últimas publicaciones</h2>
          </div>
          <div className="flex flex-col flex-wrap gap-8 items-center justify-center mx-auto md:flex-row">
            {latestPost.map(post => (
              <div key={post} role="status" className="animate-pulse md:p-6 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <TbPhotoFilled className="w-10 h-10 text-gray-200 dark:text-gray-600" />
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                  <TbUserCircle className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" />
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FEATURED WRITERS */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Escritores destacados</h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
            {featuredWriters.map(writer => (
              <div key={writer} className="flex flex-col items-center">
                <TbUserCircle className="text-gray-200 dark:text-gray-700 mx-auto mb-4 w-36 h-36 rounded-full" />
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <TbPhotoFilled className="w-6 h-6 me-3 text-gray-200 dark:text-gray-700" />
                  </li>
                  <li>
                    <TbPhotoFilled className="w-6 h-6 me-3 text-gray-200 dark:text-gray-700" />
                  </li>
                  <li>
                    <TbPhotoFilled className="w-6 h-6 me-3 text-gray-200 dark:text-gray-700" />
                  </li>
                  <li>
                    <TbPhotoFilled className="w-6 h-6 me-3 text-gray-200 dark:text-gray-700" />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="dark:bg-gray-900">
        <div className="pb-20">
          <div className="mx-auto bg-gradient-to-l from-purple-600 to-purple-700 h-96">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Estadísticas</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold">73M+</dt>
                  <dd className="text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">publicaciones</dd>
                </div>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold">73M+</dt>
                  <dd className="text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">escritores</dd>
                </div>
              </div><div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold">73M+</dt>
                  <dd className="text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">temas</dd>
                </div>
              </div><div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold">73M+</dt>
                  <dd className="text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">lecturas</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL SECTION */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonios</h2>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                <p className="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                <p className="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                <p className="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                <p className="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                <p className="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                <p className="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="text-center">
            <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
          </div>
        </div>
      </section>
      {/* NEWSLETTER SECTION */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Suscríbete a nuestra newsletter</h2>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Introduce tu correo electrónico" type="email" id="email" required />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-rose-700 border-rose-600 sm:rounded-none sm:rounded-r-lg hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Suscribir</button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">Nos preocupamos por la protección de tus datos. <a href="#" className="font-medium text-rose-600 dark:text-rose-500 hover:underline">Lea nuestra Política de Privacidad</a>.</div>
            </form>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">One Blog™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </footer>
    </main >
  )
}

export default Welcome
