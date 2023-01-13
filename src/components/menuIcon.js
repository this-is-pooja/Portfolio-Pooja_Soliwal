import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";

import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

function MenuIcon({ theme, workClick, testimonialClick }) {
  return (
    <Menu>
      <MenuHandler>
        <div
          class={`${
            theme === "dark" ? "text-white opacity-60" : "text-Navy"
          } text-3xl sm:display md:hidden `}
        >
          <GiHamburgerMenu />
        </div>
      </MenuHandler>
      <MenuList>
        <div class="flex flex-col p-2 gap-2 text-center">
          <a href="#work" onClick={workClick}>
            Work
          </a>
          <div class="h-0.5 w-28 bg-Navy"></div>
          <a href="/#testimonial" onClick={testimonialClick}>
            Testimonial
          </a>
          <div class="h-0.5 w-28 bg-Navy"></div>
          <div class="flex flex-row justify-center gap-4">
            <a
              href="https://github.com/this-is-pooja"
              target="_blank"
              rel="noreferrer"
              class="text-xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-soliwal-74a9a921b"
              target="_blank"
              rel="noreferrer"
              class="text-xl"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:pooja_soliwal2018@outlook.com" class="text-2xl">
              <CiMail />
            </a>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}

export default MenuIcon;
