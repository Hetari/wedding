<template>
  <div class="flex size-full flex-col justify-between space-y-10">
    <div class="space-y-4">
      <h2 class="heading-small">{{ card.title }}</h2>
      <p class="max-w-md text-base">{{ card.body }}</p>
    </div>
    <button
      class="link-button w-fit flex-none border border-primary-400 px-4 py-2 capitalize text-primary-400 transition-colors duration-300 ease-in-out hover:bg-primary-400 hover:text-primary-50"
    >
      {{ card.button }}
    </button>
  </div>
</template>

<script setup lang="ts">
  interface Card {
    card: { id: number; title: string; body: string; button: string };
  }

  defineProps<Card>();
</script>
