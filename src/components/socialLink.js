import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import React from "react";

function socialLink({ theme }) {
  const IconStyle = `transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  cursor-pointer ${
    theme === "dark" ? "opacity-60 text-white" : "text-Navy"
  } text-3xl`;
  return (
    <div class=" flex flex-col gap-2.5 fixed bottom-0 sm:hidden md:block">
      <div class={IconStyle}>
        <a
          href="https://github.com/this-is-pooja"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
      </div>
      <div class={IconStyle}>
        <a
          href="https://www.linkedin.com/in/pooja-soliwal-74a9a921b"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>
      <div class={IconStyle}>
        <a href="mailto:pooja_soliwal2018@outlook.com">
          <CiMail />
        </a>
      </div>
      <div
        class={`h-0.5 w-36  ${
          theme === "dark" ? "bg-white opacity-60" : "bg-Navy"
        } rotate-90 mb-18 mt-20 -ml-14`}
      ></div>
    </div>
  );
}

export default socialLink;
