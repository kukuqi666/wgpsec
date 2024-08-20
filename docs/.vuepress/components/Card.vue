<template>
  <a-row :gutter="[24, 24]">
    <a-col v-for="(card, index) in cards" :key="index" :xs="24" :sm="12" :md="8" :lg="6">
      <div class="card-tag tag-info">安全工具</div>
      <a-card hoverable>
        <img :src="card.cover" slot="cover" class="reset-height" />
        <template slot="actions">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <a-button type="primary" icon="github" ghost>传送门</a-button>
          </a>
        </template>
        <a-card-meta :title="card.title" :description="card.author" />
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "CardGrid",
  props: {
    cards: {
      type: Array,
      required: true
    }
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
