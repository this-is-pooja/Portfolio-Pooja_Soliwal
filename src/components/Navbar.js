import { FiDownload } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import MenuIcon from "./menuIcon";
import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate(e, id) {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView();
  }
  render() {
    const { theme } = this.props;
    const navLink = `${
      theme === "dark" ? "text-white opacity-60" : "text-Navy"
    } text-md font-medium tracking-widest cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110`;
    const handleThemeSwitch = () => {
      this.props.setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
      <div class="flex items-center justify-between">
        <div class="flex justify-start items-center">
          <div
            class={`text-5xl font-extrabold ${
              theme === "dark" ? "text-green" : "text-Navy"
            } `}
          >
            P
          </div>
        </div>
        <div class="flex justify-end lg:gap-8 md:gap-4 sm:gap-4 items-center">
          <div class={navLink}>
            <a
              href="#work"
              onClick={(e) => this.navigate(e, "work")}
              class="sm:hidden md:block"
            >
              Work
            </a>
          </div>
          <div class={navLink}>
            <a
              href="/#testimonial"
              onClick={(e) => this.navigate(e, "testimonial")}
              class="sm:hidden md:block"
            >
              Testimonial
            </a>
          </div>
          <a
            href="Pooja_Soliwal_CV.pdf"
            title="CV"
            download
            class="sm:hidden md:block"
          >
            <div
              class={`${
                theme === "dark" ? "text-green" : "text-Navy"
              } text-md flex font-medium tracking-widest border-2 ${
                theme === "dark" ? "border-green" : "border-Navy"
              } rounded-md p-2 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110`}
            >
              Download CV
              <div class="cursor-pointer text-xl pl-2">
                <FiDownload />
              </div>
            </div>
          </a>
          {this.props.theme === "dark" ? (
            <div
              class="opacity-60 cursor-pointer text-white text-3xl"
              onClick={handleThemeSwitch}
            >
              <MdLightMode />
            </div>
          ) : (
            <div class="cursor-pointer text-3xl" onClick={handleThemeSwitch}>
              <MdDarkMode />
            </div>
          )}
          <MenuIcon
            theme={theme}
            workClick={(e) => this.navigate(e, "work")}
            testimonialClick={(e) => this.navigate(e, "testimonial")}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
