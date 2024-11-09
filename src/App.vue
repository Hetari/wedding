<template>
  <Hero />
  <Story />
  <Venue />
</template>

<script setup lang="ts">
  import { ScrollTrigger, gsap } from 'gsap/all';
  import { Hero, Story, Venue } from './sections';
  import Lenis from 'lenis';

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
</script>
