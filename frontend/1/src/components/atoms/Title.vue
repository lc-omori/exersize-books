<template>
  <h1 v-if="title">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 18px;
  font-weight: bold;
}
</style>
