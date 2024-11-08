<template>
  <!-- TODO: Add loading animation here -->
  <div
    id="loading"
    class="fixed inset-0 z-[99999] bg-primary-50 text-primary-950"
  >
    <div
      id="percent"
      class="mt-[calc(100vh-2ch)] overflow-clip ps-[5vw] text-[35vw] leading-none sm:text-[185px] lg:text-[200px]"
    >
      <p id="percent-text" class="">0%</p>
    </div>
  </div>
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
  <div class="h-screen"></div>
</template>

<script setup lang="ts">
  import { tryOnMounted, tryOnUnmounted } from '@vueuse/core';
  import { heroImg } from '../assets/images';
  import { Navbar } from '../components';
  import gsap from 'gsap';

  const tl = gsap.timeline({
    defaults: {
      duration: 3,
      ease: 'power4.inOut',
    },
  });

  const heroImageAnimation = () => {
    const imgContainer = document.getElementById('hero-img-container');
    const img = document.getElementById('hero-img');
    const heroContent = document.getElementById('hero-content');
    gsap.to([heroContent, imgContainer, img], {
      delay: 0.1,
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'expo.inOut',
      stagger: 0.05,
    });
  };

  tryOnMounted(() => {
    // Get DOM elements
    const loading = document.getElementById('loading') as HTMLDivElement;
    const percent = document.getElementById('percent') as HTMLDivElement;
    const percentText = document.getElementById(
      'percent-text',
    ) as HTMLDivElement;

    // Update the percent text during animation
    tl.to(percentText, {
      onUpdate() {
        percentText.innerHTML = (tl.progress() * 10).toFixed() + '0 %';
      },
    });

    // Animate percent and trigger subsequent animations
    tl.to(
      percent,
      {
        marginTop: 10,
        onComplete: () => {
          gsap.to(percentText, {
            delay: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
            onStart: () => {
              gsap.to(loading, {
                delay: 1,
                duration: 1,
                yPercent: -100,
                onStart() {
                  heroImageAnimation();
                },
              });
            },
          });
        },
      },
      '<',
    );
  });

  tryOnUnmounted(() => {
    tl.kill();
  });
</script>
