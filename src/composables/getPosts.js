import { ref } from "vue";
// import { resolve } from "core-js/fn/promise";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // stimulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });
      // let data = await fetch("http://localhost:3000/posts");
      // console.log(data);
      // if (!data.ok) {
      //   throw Error("No data available");
      // }
      // posts.value = await data.json();

      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();

      posts.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
