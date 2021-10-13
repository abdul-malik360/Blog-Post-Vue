<template>
  <div class="home">
    <h1>Home</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <!-- Loading... -->
      <Spinner />
    </div>
    <!-- <PostList v-if="showPosts" :posts="posts" /> -->
    <!-- <PostList :posts="posts" /> -->

    <!-- <button @click="showPosts = !showPosts">toggle posts</button> -->
    <!-- <button @click="posts.pop()">delete a post</button> -->
    <!-- <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="handleClick">Stop Watching</button> -->

    <!-- <p>{{ name }}</p> -->
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <br />
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} -{{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button> -->
  </div>
  <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->
  <!-- <p>My name is {{ name }} and my age is {{ age }}</p> -->
  <!-- <button @click="handleClick">click me</button> -->
  <!-- <input type="text" v-model="name" /> -->

  <!-- <button @click="age++">add 1 to age</button> -->
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";

import { ref, reactive, computed } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    // console.log("setup");

    // const p = ref(null);

    // const name = ref("Abdul-Malik");
    // const age = ref(21);

    // const handleClick = () => {
    //   console.log(p, p.value);
    //   p.value.classList.add("test");
    //   p.value.textContent = "Hello Ninjas";
    //   name.value = "Achmat";
    //   age.value = 60;
    // };

    // const ninjaOne = ref({ name: "Abdul-Malik", age: 21 });
    // const ninjaTwo = reactive({ name: "Achmat", age: 60 });

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 22;
    // };

    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 61;
    // };

    // const name = computed(() => {
    //   return "Abdul-Malik";
    // });

    // const search = ref("");
    // const names = ref([
    //   "Mario",
    //   "Yoshi",
    //   "Luigi",
    //   "Toad",
    //   "Bowser",
    //   "Koopa",
    //   "Peach",
    // ]);

    // const stopWatch = watch(search, () => {
    //   console.log("watch function run");
    // });

    // const stopEffect = watchEffect(() => {
    //   console.log("watchEffect function run", search.value);
    // });

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopEffect();
    // };

    // const posts = ref([
    // {
    //   title: "Welcome to the Blog",
    //   body:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto architecto labore reiciendis ratione, obcaecati distinctio, facere aperiam quas excepturi quisquam rerum minima placeat sit eaque assumenda. Animi nemo incidunt non asperiores et autem facere voluptatibus accusamus illum sunt est blanditiis molestiae id, omnis provident, quo perferendis fugiat doloribus. Dolor id consectetur quibusdam facere inventore beatae minima, fuga cumque blanditiis totam, dicta recusandae, perspiciatis dolorum deserunt! In eveniet placeat officiis similique maiores rem velit distinctio, ea illum ad harum laborum eligendi saepe totam perferendis veniam, assumenda voluptatibus inventore porro? Culpa sed officia fugit, ex quisquam animi earum repellat dolores optio!",
    //   id: 1,
    // },
    // { title: "top 5 css tips", body: "Lorem Ipsum", id: 2 },
    // ]);

    // const error = ref(null);

    // const load = async () => {
    //   try {
    //     let data = await fetch("http://localhost:3000/posts");
    //     // console.log(data);
    //     if (!data.ok) {
    //       throw Error("No data available");
    //     }

    //     posts.value = await data.json();
    //   } catch (err) {
    //     error.value = err.message;
    //     console.log(error.value);
    //   }
    // };

    // load();

    // const showPosts = ref(true);

    const { posts, error, load } = getPosts();

    load();

    return {
      // name,
      // age,
      // handleClick,
      // p,
      // ninjaOne,
      // updateNinjaOne,
      // ninjaTwo,
      // updateNinjaTwo,
      // name,
      // names,
      // search,
      // matchingNames,
      // handleClick,

      posts,
      // showPosts,

      error,
    };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
