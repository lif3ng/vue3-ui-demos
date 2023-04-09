<script setup>
import { ref } from 'vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const list = ref(['a', 'b', 'c'])
const [parent] = useAutoAnimate()
</script>

<template>
  <div ref="parent" class="flex-inline gap-2">
    <div v-for="item, i in list" :key="item" class="w-5 h-5 flex items-center justify-center bg-blue " @click="list.splice(i, 1)">
      {{ item }}
    </div>
  </div>
  <div class="flex-inline gap-2">
    <button class="px-4 bg-green" @click="list.sort()">
      sort
    </button>
    <button class="px-4 bg-green" @click="list.sort().reverse()">
      sort reverse
    </button>
  </div>
</template>
