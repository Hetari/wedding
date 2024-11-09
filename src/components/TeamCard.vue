<template>
  <div class="img-container w-full">
    <img class="w-full" :src="img" alt="person" />
    <h3 class="heading-x-small">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
  interface Team {
    name: string;
    img: string;
  }

  defineProps<Team>();
</script>
