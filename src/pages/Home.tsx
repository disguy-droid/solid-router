import { Component, For, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { datas } from "../App";
import { animate, stagger } from "motion";

const Home: Component = () => {
  onMount(() => {
    const images: HTMLElement[] = Array.from(
      document.querySelectorAll(".image")
    );

    animate(
      images,
      {
        opacity: [0, 1],
      },
      { easing: [0.2, 0.0, 0, 1.0], delay: stagger(0.1) }
    );
  });
  return (
    <div class="[min-height:calc(100vh-64px)] px-2.5 grid place-content-center">
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-2.5 max-w-4xl mx-auto gap-2.5 place-content-center ">
        <For each={datas()}>
          {(data) => (
            <A href={`/photos/${data.id}`}>
              <li class="image aspect-square overflow-hidden rounded-xl">
                <img
                  class="w-full h-full"
                  src={data.url}
                  alt=""
                />
              </li>
            </A>
          )}
        </For>
      </ul>
      <A
        href="/contact"
        class="p-2.5 my-10 hover:underline w-fit underline-offset-2 decoration-2 flex items-center space-x-1 group"
      >
        <span class="text-base lg:text-lg font-medium">Contact me</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </A>
    </div>
  );
};

export default Home;
