<template>
  <div id="team" class="space-y-10">
    <h1 class="heading-medium">The Bridal Party</h1>
    <div id="team-cards" class="grid grid-cols-10 gap-x-20">
      <div id="team-slug" class="text-large col-span-2">
        <p>Make this day special</p>
        <p class="text-primary-500">for you and your family</p>
      </div>

      <template v-for="t in teamMembers" :key="t.id">
        <TeamCard class="team-card col-span-2" :name="t.name" :img="t.img" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tryOnMounted } from '@vueuse/core';
  import { teamImages } from '../assets/images';
  import { TeamCard } from '../components';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';
  gsap.registerPlugin(ScrollTrigger);

  interface Team {
    id: number;
    name: string;
    img: string;
  }
  const teamMembers: Team[] = [
    {
      id: 1,
      name: 'Caleb',
      img: teamImages[0],
    },
    {
      id: 2,
      name: 'Amaya',
      img: teamImages[1],
    },
    {
      id: 3,
      name: 'Dylan',
      img: teamImages[2],
    },
    {
      id: 4,
      name: 'Natalie',
      img: teamImages[3],
    },
  ];

  tryOnMounted(() => {
    gsap.from('#team-slug *', {
      scrollTrigger: {
        trigger: '#team',
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      ease: 'power1.out',
      rotate: 10,
      x: -50,
      y: 50,
      filter: 'blur(10px)',
      scale: 0.5,
      duration: 0.3,
      stagger: 0.1,
    });

    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: '#team',
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      ease: 'power1.out',
      rotate: -2,
      filter: 'blur(10px)',
      scale: 0,
      duration: 0.3,
      stagger: 0.08,
    });
  });
</script>
