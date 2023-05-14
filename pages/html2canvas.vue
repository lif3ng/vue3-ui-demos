<script setup>
import html2canvas from 'html2canvas'
import { toPng } from 'html-to-image'
import html2pdf from 'html2pdf.js'
const target = ref(null)

console.log(html2pdf)

onMounted(() => {
  html2canvas(target.value).then((canvas) => {
    document.querySelector('#__nuxt').appendChild(canvas)
  })
  toPng(target.value)
    .then((url) => {
      const img = document.createElement('img')
      img.setAttribute('src', url)
      document.querySelector('#__nuxt').appendChild(img)
      window.img = img
      html2pdf(img)
    })

  html2pdf(target.value)
})
</script>

<template>
  <div of-hidden>
    <div ref="target" scale-80 w-100 h-120vh flex items-center bg-blue text-white>
      xxx<div class="w-10 h-10 bg-yellow rounded-full" />
      <table b border-amber rounded-full>
        <tr>
          <td>a</td>
          <td>b</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
        </tr>
      </table>
    </div>
  </div>
</template>
