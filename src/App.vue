<template>
  <Hero />
  <Story />
  <div class="space-y-[5%] px-[5%]">
    <Venue />
    <div class="relative">
      <img
        class="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-100%]"
        :src="breakLineSvg"
        alt=""
      />
    </div>
    <Cards />
  </div>
</template>

<script setup lang="ts">
  import { ScrollTrigger, gsap } from 'gsap/all';
  import { Hero, Story, Venue, Cards } from './sections';
  import Lenis from 'lenis';
  import { breakLineSvg } from './assets/images';

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
</script>
