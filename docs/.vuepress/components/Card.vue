<template>
  <div class="card">
    <a :href="link" target="_blank">
      <img :src="cover" alt="cover" class="card-cover" />
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p>{{ author }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cover: String,
    link: String,
    title: String,
    author: String
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.card-cover {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.card-content {
  padding: 1em;
  text-align: center;
}
.card:hover {
  box-shadow: 0 9px 20px -8px rgba(0,0,0,.18);
}
</style>
