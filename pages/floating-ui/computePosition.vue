<script setup>
import { computePosition } from '@floating-ui/dom'

const reference = ref(null)
const floating = ref(null)

onMounted(() => {
  computePosition(reference.value, floating.value, { placement: 'right' }).then(({ x, y }) => {
    console.log({ x, y })
    Object.assign(floating.value.style, {
      left: `${x}px`,
      top: `${y}px`,
    })
  })
})
</script>

<template>
  <button ref="reference" class="w-30 h-10 mt-20 mx-auto border">
    reference
  </button>
  <div ref="floating" class="absolute border">
    floating
  </div>
</template>
