import { FiDownload } from "react-icons/fi";
import Img from "../assets/pooja.jpg";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }
  navigate(e, id) {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView();
  }
  render() {
    const { theme } = this.props;
    return (
      <div class="lg:pt-40 md:pt-32 sm:pt-28">
        <div class="flex justify-between lg:gap-10 md:gap-2">
          <div>
            <div>
              <img
                src={Img}
                alt=""
                class="sm:h-40 sm:w-40 rounded-full rotate-[15deg] md:hidden sm:block ml-20 -mb-8"
              />
            </div>
            <div
              class={`${
                theme === "dark" ? "text-green" : "text-Navy"
              } text-sm font-medium tracking-widest`}
            >
              Hi, I am
            </div>
            <div
              class={`${
                theme === "dark" ? "text-white" : "text-Navy"
              } lg:text-6xl md:text-5xl sm:text-4xl mt-6 font-extrabold tracking-wide font-sofia`}
            >
              Pooja Soliwal.
            </div>
            <div
              class={`${
                theme === "dark" ? "text-white opacity-40" : "text-gray"
              } lg:text-2xl md:text-xl font-md mt-4 font-bold`}
            >
              Constant web learner | Front-end Web Developer
            </div>
            <div class="w-96 max-w-xl mt-6 tracking-widest">
              <span
                class={`${
                  theme === "dark" ? "text-white opacity-60" : "text-gray"
                } lg:text-md md:text-sm font-medium`}
              >
                Front-end web developer with internship-level experience, eager
                to learn more and solve challenging problems. Currently, I am
                working at
              </span>
              <span
                class={`${
                  theme === "dark" ? "text-green" : "text-Navy"
                } lg:text-md md:text-sm font-extrabold`}
              >
                {" "}
                AirProbe
              </span>
              <span
                class={`opacity-60 lg:text-md md:text-sm font-medium ${
                  theme === "dark" ? "text-green" : "text-Navy"
                }`}
              >
                .
              </span>
            </div>
          </div>
          <div>
            <img
              src={Img}
              alt=""
              class="lg:h-60 md:h-40 lg:w-60 md:w-40 rounded-full rotate-[15deg] md:block sm:hidden"
            />
          </div>
        </div>
        <div class="sm:flex sm:gap-6">
          <div
            class={`${
              theme === "dark" ? "text-green" : "text-Navy"
            } w-32 text-center text-sm font-medium tracking-widest border-2 ${
              theme === "dark" ? "border-green" : "border-Navy"
            } rounded-md p-2 cursor-pointer mt-10 `}
          >
            <a href="/#knowMore" onClick={(e) => this.navigate(e, "knowMore")}>
              Know More
            </a>
          </div>
          <a
            href="Pooja_Soliwal_CV.pdf"
            title="CV"
            download
            class="sm:block md:hidden mt-10"
          >
            <div
              class={`${
                theme === "dark" ? "text-green" : "text-Navy"
              } text-md flex font-medium tracking-widest border-2 ${
                theme === "dark" ? "border-green" : "border-Navy"
              }  rounded-md p-2 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110`}
            >
              Download CV
              <div class="cursor-pointer text-xl pl-2">
                <FiDownload />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
