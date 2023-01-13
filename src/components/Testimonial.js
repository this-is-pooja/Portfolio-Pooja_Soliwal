import React from "react";

function Testimonial({ theme }) {
  return (
    <div class="pt-40" id="testimonial">
      <div
        class={`${
          theme === "dark" ? "text-white" : "text-Navy"
        } lg:text-6xl md:text-5xl sm:text-4xl font-semibold tracking-wider text-center mb-20`}
      >
        TESTIMONIAL
      </div>
      <div
        class={`shadow-xl md:max-w-xl sm:max-w-sm text-left font-bold text-md sm:text-sm font-Fraun
      ${
        theme === "dark"
          ? "text-white opacity-60"
          : "text-white bg-Navy rounded-xl"
      }
      p-8`}
      >
        <p>
          <q>
            {" "}
            Well focused on her work, understands syntax and error handling, and
            completes the task on time.
          </q>
           
        </p>
        <p class="flex flex-row-reverse text-xl tracking-wide">Airprobe</p>
      </div>
    </div>
  );
}

export default Testimonial;
