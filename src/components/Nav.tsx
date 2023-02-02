import type { Component } from "solid-js";
import { A } from "@solidjs/router";

const Nav: Component = () => {
  return (
    <>
      <div class="sticky top-0 bg-gradient-to-b from-white/80 to-white/10 backdrop-blur-md h-16 flex justify-center items-center ">
        <A
          href="/"
          class="px-4 py-2.5 hover:bg-gray-100 rounded-md transition font-medium"
        >
          Home
        </A>
        <A
          href="/about"
          class="px-4 py-2.5 hover:bg-gray-100 rounded-md transition font-medium"
        >
          About
        </A>
      </div>
    </>
  );
};

export default Nav;
