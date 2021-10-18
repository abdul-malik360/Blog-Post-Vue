import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
// import { resolve } from "core-js/fn/promise";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });
      // let data = await fetch("http://localhost:3000/posts/" + id);
      // console.log(data);
      // if (!data.ok) {
      //   throw Error("That Post does not Exist");
      // }
      // post.value = await data.json();
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("That post does not Exist");
      }

      post.value = { ...res.data(), id: res.id };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  //   load();

  return { post, error, load };
};

export default getPost;
