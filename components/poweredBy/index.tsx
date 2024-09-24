import React from "react";

function PoweredBy() {
  return (
    <section className="bg-light ">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className=" mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl ">
            Powered By Lumenario.
          </h1>

          <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Lumenario offers expert tech solutions, including web development,
            cybersecurity, SEO, hardware installations, and digital marketing.
            Our mission is to help businesses grow with innovative and reliable
            services.
          </p>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href=""
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-200"
                fill="currentColor"
                viewBox="0 0 64 64"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* <style>.cls-1{fill:#ffb300;}.cls-2{fill:#0074ff;}</style> */}
                </defs>
                <title />
                <path
                  className="cls-1"
                  d="M30,39.75a2,2,0,0,1-1.41-.59L26.7,37.3a2,2,0,0,1,0-2.83L43.58,17.59A2,2,0,0,1,47,19v6.24a2,2,0,1,1-4,0V23.84l-12,12,.46.46a2,2,0,0,1,0,2.82A2,2,0,0,1,30,39.75Z"
                />
                <path
                  className="cls-1"
                  d="M45,21H38.54a2,2,0,0,1,0-4H45a2,2,0,0,1,0,4Z"
                />
                <path
                  className="cls-1"
                  d="M28.12,37.88a2,2,0,0,1-1.42-.58l-2.22-2.22a2,2,0,0,1,2.83-2.83l2.22,2.22a2,2,0,0,1,0,2.83A2,2,0,0,1,28.12,37.88Z"
                />
                <path
                  className="cls-1"
                  d="M22.86,55.76H10.24a2,2,0,0,1-2-2V41.14a2,2,0,0,1,2-2H22.86a2,2,0,0,1,2,2V53.76A2,2,0,0,1,22.86,55.76Zm-10.62-4h8.62V43.14H12.24Z"
                />
                <path
                  className="cls-2"
                  d="M53.76,55.76H10.24a2,2,0,0,1-2-2V10.24a2,2,0,0,1,2-2H53.76a2,2,0,0,1,2,2V38.5a2,2,0,0,1-4,0V12.24H12.24V51.76H51.76V49.43a2,2,0,0,1,4,0v4.33A2,2,0,0,1,53.76,55.76Z"
                />
              </svg>
              Visit Lumenario
            </a>

            <a
              href=""
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {" "}
              <svg
                className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-200"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m 4 2 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -6 6 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 s 0.105469 -0.519531 0.292969 -0.707031 l 5.292969 -5.292969 l -5.292969 -5.292969 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0"
                  fill="#2e3436"
                />
              </svg>
              Learn More
            </a>
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/lumenario/logo.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default PoweredBy;
