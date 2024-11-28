<script setup>
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

import { getHealth } from '@/services/HealthService';

onMounted(async () => {
  console.log(await getHealth());
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
