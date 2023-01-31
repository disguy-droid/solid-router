import type { Component } from "solid-js";
import { A } from "@solidjs/router";

const Nav: Component = () => {
  return (
    <>
      <div class="sticky top-0 bg-white h-20 flex justify-center items-center space-x-2">
        <A
          href="/"
          class="px-4 py-2.5 hover:bg-gray-100 rounded-md"
        >
          Home
        </A>
        <A
          href="/about"
          class="px-4 py-2.5 hover:bg-gray-100 rounded-md"
        >
          About
        </A>
      </div>
    </>
  );
};

export default Nav;
