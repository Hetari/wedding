<template>
  <nav>
    <ul
      class="link-inline sm:link-nav mx-auto flex w-full items-center justify-between gap-6 sm:px-28"
    >
      <template v-for="(item, i) in navItems" :key="item.id">
        <MagneticEffect v-if="i === logoIndex" textId="logo-link" divId="logo">
          <li id="logo" class="min-w-16 max-w-28 bg-primary-50">
            <a id="logo-link" href="#app">
              <img :src="logo" alt="logo" />
            </a>
          </li>
        </MagneticEffect>
        <li
          @click.prevent="goto(item.href)"
          class="text-nowrap text-primary-950/60 transition-colors hover:text-primary-950"
        >
          <a :href="item.href">
            {{ item.label }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import MagneticEffect from './MagneticEffect.vue';
  import logo from '../assets/logo.svg';
  import { lenis } from '../main';
  const logoIndex = 2;

  interface NavItem {
    id: string;
    label: string;
    href: string;
  }
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '#app' },
    { id: 'our-story', label: 'Our Story', href: '#story' },
    { id: 'venue', label: 'Venue', href: '#venue' },
    { id: 'book', label: 'Book', href: '#form' },
  ];

  const goto = (href: string) => {
    lenis.scrollTo(href, {
      duration: 3,
    });
  };
</script>
