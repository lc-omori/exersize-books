<template>
  <Content :title=title>
    <ul>
      <li><router-link to="/todo">TODOリスト</router-link></li>
    </ul>
  </Content>
</template>

<script>
import Content from '../templates/Content';

export default {
  name: 'Menu',
  components: {
    Content,
  },
  data() {
    return {
      title: 'ページ一覧',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
