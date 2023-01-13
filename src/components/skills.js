import { FaFigma } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import React from "react";
import { SiChakraui } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";

function skills({ theme }) {
  const heading = ` ${
    theme === "dark" ? "text-white" : "text-Navy"
  } md:text-4xl sm:text-3xl font-semibold tracking-widest font-sofia`;
  const IconStyle = ` ${
    theme === "dark" ? "text-white opacity-60" : "text-gray"
  } cursor-pointer text-5xl`;
  const subHead = ` ${
    theme === "dark" ? "text-white opacity-60" : "text-gray"
  } text-sm  font-semibold tracking-widest text-md font-medium text-left`;
  return (
    <div class="pt-40 pb-28" id="knowMore">
      <div
        class={` ${
          theme === "dark" ? "text-white" : "text-Navy"
        } lg:text-6xl md:text-5xl sm:text-4xl font-semibold tracking-wider text-center`}
      >
        KNOW MORE
      </div>
      <div class="md:max-w-xl sm:max-w-sm text-left">
        <div class="flex flex-col gap-6">
          <div class={` ${heading} pt-28`}>Who am I ?</div>
          <div class={subHead}>
            I'm a BCA Graduate from Kumaun university Nainital, Uttrakhand. and
            I have done my Intermediate & Highschool from U.K board.
          </div>
          <div class={` ${heading} pt-6`}>For how long I have been coding</div>
          <div class={subHead}>
            In my first year of BCA (2018), I was introduced to C++, which I
            chose. Since then, I've dabbled in a variety of programming
            languages and technologies. From 2021 on, I shifted my interest
            towards enterprise-level technologies like React. I learned and
            practised a lot, after which I got the chance to show some expertise
            as a webdev intern at Airprobe.
          </div>
          <div class={` ${heading} pt-4`}>Technologies I use</div>
          <div class="flex justify-left md:gap-10 sm:gap-6">
            <div class={IconStyle}>
              <SiNextdotjs />
            </div>
            <div class={IconStyle}>
              <GrReactjs />
            </div>
            <div class={IconStyle}>
              <SiJavascript />
            </div>
            <div class={IconStyle}>
              <SiRedux />
            </div>
          </div>
          <div class={` ${heading} pt-6`}>Tools I use</div>
          <div class="flex justify-left md:gap-10 sm:gap-6">
            <div class={IconStyle}>
              <FaFigma />
            </div>
            <div class={IconStyle}>
              <SiGit />
            </div>
            <div class={IconStyle}>
              <SiVisualstudiocode />
            </div>
            <div class={IconStyle}>
              <FaJira />
            </div>
          </div>
          <div class={` ${heading} pt-6`}>Styling libraries</div>
          <div class="flex justify-left md:gap-10 sm:gap-6">
            <div class={IconStyle}>
              <SiMaterialui />
            </div>
            <div class={IconStyle}>
              <SiChakraui />
            </div>
            <div class={IconStyle}>
              <SiTailwindcss />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
