import { createSignal, lazy } from "solid-js";
import type { Component } from "solid-js";
import { useRoutes } from "@solidjs/router";
import Nav from "./components/Nav";
import { Transition } from "solid-transition-group";
import { TransitionGroup } from "solid-transition-group/types/TransitionGroup";

export const [datas, setDatas] = createSignal([
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1669661007953-33861e3bd46e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    title: "Mountain",
    description:
      "It is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1549598685-0058b114c9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    title: "Glacier",
    description:
      "It is a persistent body of dense ice that is constantly moving under its own weight.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1548437983-5d3c209764a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Island",
    description:
      "It is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1546656651-e564d05a4740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
    title: "Ocean",
    description:
      "It is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1514467911470-2b2492c64477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Mountain",
    description:
      "It is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Mountain",
    description:
      "It is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.",
  },
]);

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/About")),
  },
  {
    path: "/photos/:id",
    component: lazy(() => import("./pages/photos/[id]")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/[...404]")),
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div class="font-ibmPlexSans ">
      <Nav />
      <Transition
        name="fade"
        mode="out-in"
      >
        <Routes />
      </Transition>
    </div>
  );
};

export default App;
