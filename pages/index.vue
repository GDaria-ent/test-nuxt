<script setup lang="ts">
interface Post {
  title: string;
  content: string;
  image: string;
  id: number;
}
const timeStamp = ref<string | null>(null);
const postsList = ref<[] | null>([]);
const minRange = ref<number>(0);
const maxRange = ref<number>(3);

const {data} = await useAsyncData(() => Promise.all([getTimestamp(), getPosts()]));
const  [timeStampData, posts] = data.value;
timeStamp.value = timeStampData;
postsList.value = posts;

function generateTimeStamp() {
  return new Date().toISOString();
}

function updateTimestamp() {
  setInterval(()=> {timeStamp.value = generateTimeStamp()}, 10000);
}

function getTimestamp() {
  return new Promise((resolve, reject) => {
    resolve(generateTimeStamp());
  })
}

function getPosts() {
  return new Promise(async (resolve, reject) => {
    const data = await $fetch('https://jsonplaceholder.org/posts');
    resolve(data);
  });
}

function paginatePosts(minRange: number, maxRange: number) {
  return postsList.value.slice(minRange, maxRange);
}
function handlePagination(event: string) {
  if(event === 'prev') {
    minRange.value -= 3;
    maxRange.value -= 3;
  }else {
    minRange.value += 3;
    maxRange.value += 3;
  }
}
const isNextButtonActive = computed(() => {
  return minRange.value === postsList.value?.length - 1;
})
onMounted(() => {
  updateTimestamp();
})
</script>

<template>
  <div class="container py-12">
    <span class="flex justify-center mb-12 text-lg sm:text-3xl text-accent">{{timeStamp}}</span>
    <div v-for="(item, index) in paginatePosts(minRange, maxRange)" :key="index" class="mt-5">
      <PostCard :data="item"/>
    </div>
    <div class="flex justify-center text-base-weak mt-12 space-x-3">
      <button
          :disabled="minRange === 0"
          @click="handlePagination('prev')"
      >Prev</button>
      <button
          :disabled="isNextButtonActive"
          @click="handlePagination('next')"
      >Next</button>
    </div>
  </div>
</template>
