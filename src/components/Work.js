import React, { useState } from "react";

import EcommerceAnimation from "../Lotttie/22380-e-commerce.json";
import Lottie from "react-lottie";
import MusicAnimation from "../Lotttie/49116-music-burst-icon.json";
import Project from "./CustomProject";
import QuotesAnimation from "../Lotttie/82073-testimonials-icon.json";
import WeatherAnimation from "../Lotttie/61302-weather-icon.json";

function Work({ theme }) {
  const Ecommerce = {
    loop: true,
    autoplay: true,
    animationData: EcommerceAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Music = {
    loop: true,
    autoplay: true,
    animationData: MusicAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Weather = {
    loop: true,
    autoplay: true,
    animationData: WeatherAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Quotes = {
    loop: true,
    autoplay: true,
    animationData: QuotesAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [prevIconActive, setPrevIconActive] = useState(true);
  const [nextIconActive, setNextIconActive] = useState(false);

  const previousBtnHandler = () => {
    setPrevIconActive(true);
    setNextIconActive(false);
  };
  const nextBtnHandler = () => {
    setPrevIconActive(false);
    setNextIconActive(true);
  };

  return (
    <div class="pt-40 md:pt-32" id="work">
      <div
        class={`${
          theme === "dark" ? "text-white" : "text-Navy"
        } lg:text-6xl md:text-5xl sm:text-4xl font-semibold tracking-wider text-center`}
      >
        WORK
      </div>
      <div>
        {prevIconActive && (
          <div class="flex md:flex-row sm:flex-col pt-28 lg:gap-10 md:gap-6 sm:gap-8">
            <Project
              theme={theme}
              name="Ritzy"
              discription="A platform to buy luxury watches."
              animation={
                <Lottie options={Ecommerce} height={240} width={200} />
              }
              LinkContainerClass="flex justify-center gap-5 mt-4 opacity-60 cursor-pointer text-white text-2xl"
              githubLink="https://github.com/this-is-pooja/e-commerce"
              hostedLink="https://e-commerce-this-is-pooja.vercel.app/"
            />
            <Project
              theme={theme}
              name="Music Application"
              discription="An Application to listen music."
              animation={<Lottie options={Music} height={230} width={170} />}
              LinkContainerClass="flex justify-center gap-5 mt-4 opacity-60 cursor-pointer text-white text-2xl"
              githubLink="https://github.com/this-is-pooja/React-Music-App"
              hostedLink="https://music-app-this-is-pooja.vercel.app/"
            />
          </div>
        )}
        {nextIconActive && (
          <div class="flex md:flex-row sm:flex-col pt-28 lg:gap-10 md:gap-6 sm:gap-8">
            <Project
              theme={theme}
              name="Weather Application"
              discription="An Application to check the current weather."
              animation={<Lottie options={Weather} width={240} />}
              LinkContainerClass="flex justify-center gap-5 opacity-60 cursor-pointer text-white text-2xl"
              githubLink="https://github.com/this-is-pooja/React-Weather-App"
              hostedLink="https://react-weather-app-delta.vercel.app/"
            />
            <Project
              theme={theme}
              name="Quotes Generator"
              discription="An Application to Generate your quotes."
              animation={<div class="mt-8"><Lottie options={Quotes} height={190} width={180}/></div>}
              LinkContainerClass="flex justify-center gap-5 opacity-60 cursor-pointer text-white text-2xl"
              githubLink="https://github.com/this-is-pooja/Quotes_Generator"
              hostedLink="http://quotesgen-ej06v2ml2-this-is-pooja.vercel.app/"
            />
          </div>
        )}
      </div>
      <div class="pt-8 flex justify-center gap-5">
        <div
          class={`h-2 w-2 rounded-xl ${
            theme === "dark" ? "bg-white" : "bg-Navy"
          } cursor-pointer  ${!prevIconActive && "opacity-60"}`}
          onClick={previousBtnHandler}
        ></div>
        <div
          class={`h-2 w-2 rounded-xl ${
            theme === "dark" ? "bg-white" : "bg-Navy"
          } cursor-pointer  ${prevIconActive && "opacity-60"}`}
          onClick={nextBtnHandler}
        ></div>
      </div>
    </div>
  );
}

export default Work;
