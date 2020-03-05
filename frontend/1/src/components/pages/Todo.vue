<template>
  <Content :title=title></Content>
</template>

<script>
import Content from '../templates/Content';

export default {
  name: 'Todo',
  components: {
    Content,
  },
  data() {
    return {
      title: 'TODOリスト',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
