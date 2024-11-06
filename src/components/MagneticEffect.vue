<template>
  <slot />
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { onMounted, onUnmounted, ref, Ref, watch } from 'vue';
  import gsap from 'gsap';

  const props = defineProps({
    divId: {
      type: String,
      required: true,
    },
    textId: {
      type: String,
      required: true,
    },
    magnetoStrengthVal: {
      type: Number,
      required: false,
      default: 70,
    },
    magnetoTextStrengthVal: {
      type: Number,
      required: false,
      default: 50,
    },
  });

  const { width } = useWindowSize();
  let magneto: Ref<HTMLElement>;
  let magnetoTextRef: Ref<HTMLElement>;

  const handleMouseMove = (e: MouseEvent) => {
    activateMagneto(
      e,
      magneto,
      magnetoTextRef,
      props.magnetoStrengthVal,
      props.magnetoTextStrengthVal,
    );
  };

  const handleMouseLeave = () => {
    resetMagneto(magneto, magnetoTextRef);
  };
  const isActive = ref(true);

  onMounted(() => {
    magneto = ref(document.getElementById(props.divId) as HTMLElement);
    magnetoTextRef = ref(document.getElementById(props.textId) as HTMLElement);

    isActive.value = true;
    magneto.value.addEventListener('mousemove', handleMouseMove);
    magneto.value.addEventListener('mouseleave', handleMouseLeave);
  });

  watch(width, (newVal: number) => {
    if (newVal < 700 && isActive.value) {
      isActive.value = false;
      magneto.value.removeEventListener('mousemove', handleMouseMove);
      magneto.value.removeEventListener('mouseleave', handleMouseLeave);
    } else if (newVal >= 700 && !isActive.value) {
      magneto.value.addEventListener('mousemove', handleMouseMove);
      magneto.value.addEventListener('mouseleave', handleMouseLeave);
    }
  });

  onUnmounted(() => {
    magneto.value.removeEventListener('mousemove', handleMouseMove);
    magnetoTextRef.value.removeEventListener('mouseleave', handleMouseLeave);
  });

  // ! Magneto effects
  const activateMagneto = (
    event: MouseEvent,
    magneto: Ref<HTMLElement>,
    magnetoText: Ref<HTMLElement>,
    magnetoStrengthVal: number,
    magnetoTextStrengthVal: number,
  ) => {
    const xDivTo = gsap.quickTo(magneto.value, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yDivTo = gsap.quickTo(magneto.value, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const { clientX, clientY } = event;
    const { width, height, left, top } = magneto.value.getBoundingClientRect();

    const magnetoStrength = magnetoStrengthVal;
    const magnetoTextStrength = magnetoTextStrengthVal;
    const newX = ((clientX - left) / width - 0.5) * magnetoStrength;
    const newY = ((clientY - top) / height - 0.5) * magnetoTextStrength;
    // const newX = clientX - (left + width / 2);
    // const newY = clientY - (top + height / 2);

    // move the magneto
    xDivTo(newX);
    yDivTo(newY);

    // move the text
    xTextTo(newX);
    yTextTo(newY);
  };

  const resetMagneto = (
    magneto: Ref<HTMLElement>,
    magnetoText: Ref<HTMLElement>,
  ) => {
    const xDivTo = gsap.quickTo(magneto.value, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yDivTo = gsap.quickTo(magneto.value, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    xDivTo(0);
    yDivTo(0);

    // move the text
    xTextTo(0);
    yTextTo(0);
  };
</script>
