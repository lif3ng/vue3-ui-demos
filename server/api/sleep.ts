export default defineEventHandler((event) => {
  const sec = +(getQuery(event).sec || 1)
  return new Promise(resolve => setTimeout(() => resolve(`sleep ${sec}s done`), sec * 1000))
})
