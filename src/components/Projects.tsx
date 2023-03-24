import React, { useEffect, useState } from "react";
import Data from "../data.json";
import Card from "./Project/Card";

interface Data {
  title: string;
  body: string;
  image: string;
  url: string;
}

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState(Data);
  const length = projects.length;

  const handlePrevious = () => {
    const newIndex = index - 1 < 0 ? length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    console.log("Clicked");
    const newIndex = index + 1 >= length ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="flex flex-col items-center  h-full">
        <h1
          id="experience-section"
          className="text-2xl font-light pt-24 text-zm-200 tracking-widest"
        >
          PROJECTS
        </h1>
        <div className="absolute flex flex-row h-full  items-center justify-center">
          <div className="relative ">
            <div className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
              {projects.map((_, i) => (
                <button
                  type="button"
                  className={`mx-[3px] box-content h-[3px] w-[30px] ${
                    index === i ? "opacity-100" : "opacity-50"
                  } flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px]  transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                  aria-label={`Slide ${i}`}
                ></button>
              ))}
            </div>
            <div className="relative w-full h-full overflow-hidden items-center self-center justify-center">
              {projects.map((data, i) => (
                <div
                  key={i}
                  className={`relative float-left flex h-full -mr-[100%] place-self-center self-center justify-center items-center ${
                    i === index
                      ? "left-0"
                      : i > index
                      ? "left-full"
                      : "-left-full"
                  }  w-full transition-all duration-[600ms] ease-in-out motion-reduce:transition-none`}
                >
                  <Card
                    title={data.title}
                    url={data.url}
                    body={data.body}
                    image={data.image}
                    className={"w-full"}
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              onClick={handlePrevious}
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              onClick={handleNext}
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
