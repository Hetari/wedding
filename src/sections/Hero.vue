<template>
  <!-- TODO: Add loading animation here -->
  <div class="h-svh px-[5%] pt-6 lg:px-[10%]">
    <header>
      <Navbar class="h-[10svh]" />
    </header>
    <main class="flex h-[calc(90svh-10%)] flex-col justify-around">
      <div class="my-8 flex flex-col items-center gap-y-1 leading-none">
        <p class="heading-tiny text-primary-500">Please join us to celebrate</p>
        <h1 class="heading-xl">Caleb & Amaya</h1>
        <p class="heading-tiny text-primary-500">
          <time datetime="2022-07-15">July 15, 2022</time> - Boise, Idaho
        </p>
      </div>

      <div class="h-[50svh] overflow-clip">
        <img
          class="h-[50svh] w-full object-cover object-center"
          :src="heroImg"
          alt=""
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { heroImg } from '../assets/images';
  import { Navbar } from '../components';
</script>
