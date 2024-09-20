import React from "react";
import IntergrationItem from "./intergrationItem"; // Adjust the path based on your file structure
import { intergrationData } from "./IntergrationsData"; // Assuming integrationData is where you store the data

const Integrations = () => {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-11 gap-7 inline-flex">
          <div className="w-full justify-between items-center lg:gap-12 gap-7 flex md:flex-row flex-col">
            <div className="flex-col justify-center md:items-start items-center gap-2.5 inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Integrations
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                SCMS seamlessly integrates with over 10 leading applications,
                offering a streamlined and connected experience.
              </p>
            </div>
            <button className="px-5 py-2.5 bg-primary transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                Want to learn more?
              </span>
              <div className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.5845 4.99988L9.5847 10.0001L4.58154 15.0032M10.4178 4.99988L15.418 10.0001L10.4149 15.0032"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Display the integrations */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {intergrationData.map((integration) => (
              <IntergrationItem
                key={integration.id}
                id={integration.id}
                title={integration.title}
                icon={integration.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
