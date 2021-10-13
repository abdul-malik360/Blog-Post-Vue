import { ref } from "@vue/reactivity";
// import { resolve } from "core-js/fn/promise";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // stimulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      let data = await fetch("http://localhost:3000/posts");
      // console.log(data);
      if (!data.ok) {
        throw Error("No data available");
      }

      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  //   load();

  return { posts, error, load };
};

export default getPosts;
