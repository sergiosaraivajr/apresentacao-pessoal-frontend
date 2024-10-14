import image from "../../img/myimage.jpg";

function SocialCard() {
  return (
    <div className="mt-6 p-6 bg-gray-800 max-w-screen-sm min-h-min h-auto m-10 rounded-xl shadow-2xl">
      <div className="flex flex-col items-center mx-6 p-2 max-w-screen-md rounded-lg overflow-hidden bg-white/50 backdrop-blur-lg border border-white/30 shadow-lg">
        <img
          className="w-32 sm:w-40 md:w-48 lg:w-52 xl:w-64 rounded-full shadow-lg mb-4"
          src={image}
          alt="Imagem do card"
        />
        <div className="p-6 text-center">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            Sérgio Saraiva
          </h2>
          <p className="text-gray-600 text-base">Desenvolvedor Front End</p>
        </div>
      </div>
      <div className="px-6 pt-10 pb-2 flex flex-wrap space-x-4 justify-center">
        <a
          href="https://instagram.com/sergio_saraivajr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-pink-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </button>
        </a>
        <a
          href="https://github.com/sergiosaraivajr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.6 31.3 25.6 58.9 0 96.1-56.5 104.3-112.3 110.5 7.2 6.6 13.7 17.7 16 33.7 14.3 6.6 51 17.7 72.9-20.9 13.7-23.8 38.6-25.8 38.6-25.8 24.5-.3 1.6 15.4 1.6 15.4-16.3 16.1-27.8 36.7-27.8 36.7-14.7 44.8-84.7 29.8-84.7 29.8 0 21.1-.2 55.3-.3 61.5 0 6.5 4.5 14.4 17.3 12.1 99.8-33.5 169.5-128.3 169.5-239.1 0-138.7-106.1-244-244.8-244zm-85.1 379.4c-2.9 .7-5.5-1.1-5.5-4.1 0-2.9 2.6-4.8 5.5-4.1 2.9 .7 5.5 3.5 5.5 4.1s-2.6 3.5-5.5 4.1z" />
              </svg>
            </span>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/sergiosaraiva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span class="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </button>
        </a>
        <a
          href="https://wa.me/85986393100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500  hover:shadow-emerald-400 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span class="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222
                    222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27
                    106.1 27h.1c122.3 0 224.1-99.6 224.1-222
                    0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2
                    0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72
                    359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5
                    184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1
                    130.5 0 101.8-84.9 184.6-186.6
                    184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5
                    2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12
                    1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7
                    .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7
                    0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7
                    22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6
                    13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1
                    3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default SocialCard;
