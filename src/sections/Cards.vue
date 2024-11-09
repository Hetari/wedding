<template>
  <div id="cards" class="grid grid-cols-3 gap-x-20 py-[10%]">
    <template v-for="c in cards" :key="c.id">
      <Card :card="c" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Card } from '../components';
  import { tryOnMounted } from '@vueuse/core';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';

  gsap.registerPlugin(ScrollTrigger);

  interface Card {
    id: number;
    title: string;
    body: string;
    button: string;
  }
  const cards = ref<Card[]>([
    {
      id: 1,
      title: 'Hotel 1',
      body: 'Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.',
      button: 'button',
    },
    {
      id: 2,
      title: 'Hotel 2',
      body: 'Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsanlectus lectus eu amet. Eros, accumsanlectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.',
      button: 'button',
    },
    {
      id: 3,
      title: 'Hotel 3',
      body: 'Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.',
      button: 'button',
    },
  ]);

  tryOnMounted(() => {
    gsap.from('#cards div', {
      scrollTrigger: {
        trigger: '#cards',
        start: 'top 75%',
        end: 'top 25%',
        scrub: true,
      },
      opacity: 0,
      rotate: 7.5,
      scale: 0.8,
      y: 100,
      stagger: 0.2,
      duration: 1,
    });
  });
</script>
