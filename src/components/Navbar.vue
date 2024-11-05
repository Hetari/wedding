<template>
  <nav>
    <ul
      class="link-inline mx-auto flex w-full items-center justify-between gap-6"
    >
      <template v-for="(item, i) in navItems" :key="item.id">
        <MagneticEffect v-if="i === logoIndex" textId="logo-link" divId="logo">
          <li id="logo" class="bg-primary-50 min-w-16 max-w-28">
            <a id="logo-link" href="#app">
              <img :src="logo" alt="logo" />
            </a>
          </li>
        </MagneticEffect>
        <li class="text-primary-950/60 text-nowrap">
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
  const logoIndex = 3;

  interface NavItem {
    id: string;
    label: string;
    href: string;
  }
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'our-story', label: 'Our Story', href: '/our-story' },
    { id: 'venue', label: 'Venue', href: '/venue' },
    { id: 'itinerary', label: 'Itinerary', href: '/itinerary' },
    { id: 'registry', label: 'Registry', href: '/registry' },
    { id: 'rsvp', label: 'RSVP', href: '/rsvp' },
  ];
</script>
