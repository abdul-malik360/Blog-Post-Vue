<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],

  components: { SinglePost },
  setup() {
    // console.log(this.posts);
  },

  // setup(props) {
  //   // console.log(props.posts);
  //   onMounted(() => console.log("component mounted"));
  //   onUnmounted(() => console.log("component Unmounted"));
  //   onUpdated(() => console.log("component updated"));
  // },
};
</script>

<style></style>
