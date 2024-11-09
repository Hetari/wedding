<template>
  <div id="venue" class="grid h-[75vh] grid-cols-4 gap-x-20 p-[10%]">
    <div class="col-span-2 place-content-center">
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

    <div class="relative col-span-2 size-full">
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
  import { venueImages } from '../assets/images';
</script>
