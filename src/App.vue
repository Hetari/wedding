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
  import { ScrollTrigger, gsap } from 'gsap/all';
  import { Hero, Story, Venue, Cards, Team, Form } from './sections';
  import Lenis from 'lenis';
  import { breakLineSvg } from './assets/images';

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
</script>
