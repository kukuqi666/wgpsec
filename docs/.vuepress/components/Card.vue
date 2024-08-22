<template>
  <a-col :xs="24" :sm="isMobile ? 24 : 12" :md="isMobile ? 24 : 8" :lg="6" class="card-col">
    <div class="card-container">
      <div class="card-tag tag-info">安全工具</div>
      <a-card hoverable>
        <img :src="cover" alt="Card cover" slot="cover" class="reset-height" />
        <template v-slot:actions>
          <a :href="link" target="_blank" rel="noopener noreferrer">
            <a-button type="primary" icon="github" ghost>传送门</a-button>
          </a>
        </template>
        <a-card-meta :title="title" :description="author"></a-card-meta>
      </a-card>
    </div>
  </a-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    cover: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
