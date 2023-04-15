<script setup>
const { pending, data, refresh } = useFetch('/api/sleep?sec=3')
</script>

<template>
  <div>
    <div v-if="pending">
      loading
    </div>
    <div v-else>
      {{ data }}
    </div>
    <button @click="refresh">
      refresh
    </button>
  </div>
</template>
