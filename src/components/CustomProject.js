import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import React from "react";

const CustomProject = ({
  theme,
  name,
  discription,
  githubLink,
  hostedLink,
  LinkContainerClass,
  animation,
}) => {
  return (
    <div
      class={`max-w-md p-10 shadow-xl rounded-xl text-center lg:w-96 md:w-80 sm:w-80 sm:mb-6 ${
        theme !== "dark" && "bg-Navy"
      } `}
    >
      <div class="text-white text-xl tracking-widest font-bold font-sofia">
        {name}
      </div>
      <p class="text-white text-sm tracking-wider opacity-60 mt-2 mb-2">
        {discription}
      </p>
      <div class="h-60">{animation}</div>
      <div class={LinkContainerClass}>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href={hostedLink} target="_blank" rel="noreferrer">
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};
export default CustomProject;
