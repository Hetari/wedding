<template>
  <div
    v-if="loading"
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
</template>

<script setup lang="ts">
  import { tryOnMounted, tryOnUnmounted } from '@vueuse/core';

  import gsap from 'gsap';
  import { ref } from 'vue';

  const tl = gsap.timeline({
    defaults: {
      duration: 3,
      ease: 'power4.inOut',
    },
  });
  const loading = ref(true);

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
      onComplete() {
        loading.value = false;
      },
    });
  };

  tryOnMounted(() => {
    // Update the percent text during animation
    if (loading.value) {
      loadingAnimation();
    } else {
      heroImageAnimation();
    }
  });

  const loadingAnimation = () => {
    // Get DOM elements
    const loading = document.getElementById('loading') as HTMLDivElement;
    const percent = document.getElementById('percent') as HTMLDivElement;
    const percentText = document.getElementById(
      'percent-text',
    ) as HTMLDivElement;

    tl.to(percentText, {
      onUpdate() {
        percentText.innerHTML = (tl.progress() * 10).toFixed() + '0 %';
      },
    });

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
  };

  tryOnUnmounted(() => {
    tl.kill();
  });
</script>
