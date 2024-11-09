<template>
  <Hero />
  <Story />
  <div class="space-y-[5%] px-[5%]">
    <Venue />
    <img class="!mx-auto !p-0" :src="breakLineSvg" alt="" />
    <Cards />
    <Team />
    <img class="mx-auto" :src="breakLineSvg" alt="" />
    <Form />
  </div>
</template>

<script setup lang="ts">
  import { Hero, Story, Venue, Cards, Team, Form } from './sections';
  import { breakLineSvg } from './assets/images';
  import { lenis } from './main';
  import { ScrollTrigger, gsap } from 'gsap/all';

  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
</script>
