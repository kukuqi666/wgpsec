<template>
  <a-row :gutter="[24, 24]">
    <a-col :xs="24" :sm="12" :md="12" :lg="6">
      <div class="card-tag tag-info">安全工具</div>
      <a-card hoverable>
        <img :src="cover" slot="cover" class="reset-height" />
        <template slot="actions">
          <a :href="link" target="_blank" rel="noopener noreferrer">
            <a-button type="primary" icon="github" ghost>传送门</a-button>
          </a>
        </template>
        <a-card-meta :title="title" :description="author" />
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "Card",
  props: {
    cover: String,
    link: String,
    title: String,
    author: String
  }
};
</script>

<style>
.card-tag {
  position: absolute;
  padding: 4px 7px 4px 14px;
  border-radius: 50px 0 0 50px;
  border: 1px solid transparent;
  border-right-color: transparent !important;
  right: 0;
  top: 15px;
  z-index: 20;
  text-align: center;
  user-select: none;
}
.tag-info {
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}
.reset-height {
  max-height: 160px;
  object-fit: cover;
}
</style>
