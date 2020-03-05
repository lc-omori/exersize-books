<template>
  <div>
    <global-header />
    <div class="wrapper">
      <content-title :title=title></content-title>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Title from '../atoms/Title';
import GlobalHeader from '../organisms/GlobalHeader';

export default {
  components: {
    ContentTitle: Title,
    GlobalHeader,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 20px auto 0;
  min-width: 980px;
  max-width: 980px;

  main {
    margin-top: 20px;
  }
}
</style>
