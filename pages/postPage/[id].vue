<script setup lang="ts">
const route = useRoute();
const postId = route.params.id;
const { data:post } = await useAsyncData(() => getPost());
function getPost() {
  return new Promise(async (resolve, reject) => {
    const data = await $fetch(`https://jsonplaceholder.org/posts/${postId}`);
    resolve(data);
  });
}
</script>

<template>
  <section class="container py-5 sm:py-24">
    <h1 class="mb-5 text-center text-2xl font-bold">{{post.title}}</h1>
    <p>{{post.content}}</p>
    <NuxtLink to="/" class="flex justify-center mt-6 sm:mt-24 text-3xl text-accent hover:text-accent-strong transition-colors duration-300 font-bold">Back!</NuxtLink>
  </section>
</template>
