import React from "react";

function BookingInfo() {
  return (
    <div className=" w-full bg-black ">
      <div className="relative pt-20">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-800 rounded-r-3xl"></div>
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            ></rect>
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-gray-600 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                ></path>
                <path
                  className="text-gray-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                ></path>
              </svg>
            </div>
            <div className="relative flex flex-col">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  {" "}
                Bookings and Updates
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-100">
                  {" "}
                  Get to know about the Bookings and notification features{" "}
                </p>
              </div>
              <a
                href="#"
                className="w-auto inline-block mt-5 mx-auto rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
              >
                Get started →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
      <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between py-20">
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                </path>
            </svg>
        </div>
        <h3 className="text-3xl font-bold">Schedule Classes</h3>
        <p>Plan and manage your classes seamlessly, ensuring optimal scheduling for both instructors and students.</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 className="text-3xl font-bold">Book Facilities</h3>
        <p> Effortlessly reserve classrooms, conference rooms, or other facilities through the SCMS booking system.</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
            </svg>

        </div>
        <h3 className="text-3xl font-bold">Get Notifications</h3>
        <p>Stay informed with real-time notifications about your classes, Bookings, schedule changes, and important updates through whatsapp.</p>
    </div>
</div>
      </div>
    </div>
  );
}

export default BookingInfo;
