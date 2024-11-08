<template>
  <!-- TODO: Make this responsive -->
  <div id="story" class="px-[15%] py-[10%]">
    <div class="grid grid-cols-4 text-primary-50">
      <h1 class="heading-large col-span-1">
        Our <br />
        Story
      </h1>
      <div class="col-span-1"></div>
      <p class="text-medium col-span-2">
        Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
        aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
        diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus
        pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit
        eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque quis
        et, laoreet.

        <br />
        <br />

        Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis
        lorem dui tristique massa enim. Faucibus sed egestas mollis vivamus et
        sed sed.

        <br />
        <br />

        Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
        nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu,
        ultrices. Purus pretium egestas ultricies tempus sit elit.
      </p>
    </div>
  </div>
  <div class="w-full">
    <img class="w-full" :src="storyImg" alt="story image" />
  </div>
</template>

<script setup lang="ts">
  import { tryOnMounted } from '@vueuse/core';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';
  import { storyImg } from '../assets/images';

  gsap.registerPlugin(ScrollTrigger);

  tryOnMounted(() => {
    const storySection = document.getElementById('story') as HTMLDivElement;

    gsap.to(storySection, {
      scrollTrigger: {
        trigger: storySection,
        start: 'top 75%',
        end: 'top 25%',
        // toggleActions: 'play none none reverse',
        scrub: true,
      },
      backgroundColor: '#c6754d',
      duration: 1,
    });
  });
</script>
