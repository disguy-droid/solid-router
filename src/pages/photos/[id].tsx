import { Component, createMemo, For } from "solid-js";
import { useParams } from "@solidjs/router";
import { datas } from "../../App";

const Photos: Component = () => {
  const { id } = useParams();

  return (
    <>
      <div class="min-h-screen">
        <For each={datas()}>
          {(data) => {
            if (data.id === Number(id))
              return (
                <div class="max-w-6xl mx-auto py-2.5 px-2.5">
                  <div class="aspect-video">
                    <img
                      class="rounded-xl w-full h-full object-cover object-center"
                      src={data.url}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <h3 class="text-xl lg:text-3xl font-medium mt-10">
                    {data.title}
                  </h3>
                  <p class="text-base mt-2.5">
                    {data.description} Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Consequatur libero, aperiam animi rem
                    fugiat illo voluptatibus. Doloribus doloremque odio, nam
                    dignissimos maxime, corrupti ad iste debitis dolores
                    expedita quod aut.
                  </p>
                </div>
              );
          }}
        </For>
      </div>
    </>
  );
};

export default Photos;
