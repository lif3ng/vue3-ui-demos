<script setup>
import draggable from 'vuedraggable'
const list = ref([
  'aaaa', 'bbbbb', 'ccccc', 'ddddddd', 'eeeeeee',
])
const drag = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <!-- MVP -->
    <draggable v-model="list">
      <template #item="{ element }">
        <div>{{ element }}</div>
      </template>
    </draggable>
    <draggable
      v-model="list"
      :animation="200"
      ghost-class="ghost"
      @start="drag = true" @end="drag = false"
    >
      <template #item="{ element }">
        <div class="flex gap-1 items-center">
          <div class="w-4 h-4 rounded bg-red" :class="{ op0: drag }" />
          {{ element }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<style>
/* .flip-list-move {
  transition: transform 0.5s;
} */
.ghost{
  @apply outline
}
</style>
