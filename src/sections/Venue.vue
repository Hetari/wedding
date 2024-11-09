<template>
  <div id="venue" class="grid h-[75vh] grid-cols-4 gap-x-20 px-[5%] pt-[10%]">
    <div id="venue-text" class="col-span-2 place-content-center">
      <h2 class="heading-all-caps text-primary-500">The Venue</h2>
      <h3 class="heading-medium">Gino Winery Estate</h3>
      <p class="max-w-xl text-base">
        Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
        aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
        diam felis, fringilla varius.
        <br />
        <br />
        4750 Tyler Avenue
        <br />
        Boise, Idaho 83705
      </p>
    </div>

    <div id="imgs" class="relative col-span-2 size-full">
      <template v-for="(img, i) in venueImages" :key="i">
        <img
          class="absolute size-full object-contain"
          :style="`top: ${i === 2 ? 1 : -i}px`"
          :src="img"
          alt="venue image"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tryOnMounted } from '@vueuse/core';
  import { venueImages } from '../assets/images';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';

  gsap.registerPlugin(ScrollTrigger);

  tryOnMounted(() => {
    gsap.from('#imgs img', {
      left: '100%',
      rotate: 15,
      stagger: 0.2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '#imgs',
        start: 'top bottom',
        end: 'center center',
        scrub: 1,
      },
    });

    gsap.from('#venue-text *', {
      opacity: 0,
      scale: 1.2,
      stagger: 0.2,
      x: -200,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: '#venue-text',
        start: '85% bottom',
        end: '35% center',
        scrub: 1,
      },
    });
  });
</script>
