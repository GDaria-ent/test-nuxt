<script setup lang="ts">
interface Post {
  title: string;
  content: string;
  image: string;
  id: number;
}
interface Props {
  data: Post
}
const props = defineProps<Props>();
const truncatedPost = computed(() => {
  return props.data.content.slice(0, 250 - 1) + '...';
})

</script>

<template>
  <NuxtLink :to="`/postPage/${data.id}`" class="px-3 py-2.5 flex items-start space-x-5 rounded-lg bg-faint hover:shadow-xl">
    <figure class="hidden sm:flex w-52 h-52 shrink-0 overflow-hidden rounded-lg">
      <img :src="data.image" class="object-cover w-full h-full"/>
    </figure>
    <div>
      <h2 class="text-lg sm:text-2xl font-semibold">{{data.title}}</h2>
      <p>{{truncatedPost}}</p>
    </div>
  </NuxtLink>
</template>
