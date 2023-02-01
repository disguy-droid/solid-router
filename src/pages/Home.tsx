import { Component, For } from "solid-js";
import { A } from "@solidjs/router";
import { datas } from "../App";

const Home: Component = () => {
  return (
    <>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [min-height:calc(100vh-80px)] pb-2.5 max-w-4xl mx-auto gap-2.5 place-content-center px-2.5">
        <For each={datas()}>
          {(data) => (
            <A href={`/photos/${data.id}`}>
              <li class="aspect-square overflow-hidden rounded-xl">
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
    </>
  );
};

export default Home;
