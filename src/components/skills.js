import React from "react";
import { FaFigma, FaJira } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiChakraui,
  SiGit,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMantine,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills({ theme }) {
  const headingClass = `${
    theme === "dark" ? "text-white" : "text-Navy"
  } md:text-4xl sm:text-3xl font-semibold tracking-widest font-sofia`;

  const iconClass = `${
    theme === "dark" ? "text-white opacity-60" : "text-gray"
  } cursor-pointer text-5xl`;

  const subHeadingClass = `${
    theme === "dark" ? "text-white opacity-60" : "text-gray"
  } text-sm font-semibold tracking-widest text-md font-medium text-left`;

  const technologies = [
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <GrReactjs />, label: "React" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiRedux />, label: "Redux" },
  ];

  const tools = [
    { icon: <FaFigma />, label: "Figma" },
    { icon: <SiGit />, label: "Git" },
    { icon: <VscVscode />, label: "VS Code" },
    { icon: <FaJira />, label: "Jira" },
  ];

  const stylingLibraries = [
    { icon: <SiMui />, label: "MUI" },
    { icon: <SiChakraui />, label: "Chakra UI" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiMantine />, label: "Mantine" },
  ];

  return (
    <div className="pt-40 pb-28" id="knowMore">
      <div
        className={`${
          theme === "dark" ? "text-white" : "text-Navy"
        } lg:text-6xl md:text-5xl sm:text-4xl font-semibold tracking-wider text-center`}
      >
        KNOW MORE
      </div>

      <div className="md:max-w-xl sm:max-w-sm text-left">
        <div className="flex flex-col gap-6">
          <div className={`${headingClass} pt-28`}>Who am I?</div>
          <div className={subHeadingClass}>
            I'm a BCA Graduate from Kumaun University, Nainital, Uttarakhand. I
            have completed my Intermediate & High School from the U.K board.
          </div>

          <div className={`${headingClass} pt-6`}>
            For how long I have been coding
          </div>
          <div className={subHeadingClass}>
            In my first year of BCA (2018), I was introduced to C++, which I
            chose. Since then, I've explored various programming languages and
            technologies. From 2021 onward, I shifted my interest to
            enterprise-level technologies like React. I learned and practiced a
            lot, after which I got the opportunity to showcase my expertise as a
            web developer at Airprobe.
          </div>

          <div className={`${headingClass} pt-4`}>Technologies I use</div>
          <div className="flex justify-left md:gap-10 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className={iconClass} title={tech.label}>
                {tech.icon}
              </div>
            ))}
          </div>

          <div className={`${headingClass} pt-6`}>Tools I use</div>
          <div className="flex items-center justify-left md:gap-10 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`${iconClass} 
                ${
                  tool.label.includes("VS") && "text-[3.4rem]"
                }`
              }
                title={tool.label}
              >
                {tool.icon}
              </div>
            ))}
          </div>

          <div className={`${headingClass} pt-6`}>Styling Libraries</div>
          <div className="flex justify-left md:gap-10 sm:gap-6">
            {stylingLibraries.map((library, index) => (
              <div key={index} className={iconClass} title={library.label}>
                {library.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
