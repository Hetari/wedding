<template>
  <!-- TODO: Make navbar responsive -->
  <Loading />
  <div class="h-svh px-[5%] pt-6 lg:px-[10%]">
    <header>
      <Navbar class="h-[10svh]" />
    </header>
    <main class="flex h-[calc(90svh-10%)] flex-col justify-around">
      <div
        id="hero-content"
        class="my-8 flex -translate-y-1/3 flex-col items-center gap-y-1 leading-none opacity-0"
      >
        <p class="heading-tiny text-primary-500">Please join us to celebrate</p>
        <h1 class="heading-xl">Caleb & Amaya</h1>
        <p class="heading-tiny text-primary-500">
          <time datetime="2022-07-15">July 15, 2022</time> - Boise, Idaho
        </p>
      </div>

      <div id="hero-img-container" class="h-[50svh] scale-125 overflow-clip">
        <img
          id="hero-img"
          class="h-[50svh] w-full scale-150 object-cover object-center"
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
  import Loading from '../components/Loading.vue';
</script>
