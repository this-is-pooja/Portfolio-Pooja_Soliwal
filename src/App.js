import { useEffect, useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import SocialLink from "./components/socialLink";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div class={` ${theme === "dark" ? "bg-Navy" : "bg-white"} p-4`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <SocialLink theme={theme} />
      <div class="grid w-screen place-items-center lg:-ml-10 md:-ml-8 sm:-ml-4">
        <About theme={theme} />
        <Work theme={theme} />
        <Testimonial theme={theme} />
        <Skills theme={theme} />
      </div>
    </div>
  );
}

export default App;
