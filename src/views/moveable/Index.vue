<template>
  <div class="page main">
    <div class="container">
      <vue-drag-resize :isResizable="false"
                       :parent-limitation="true"
                       :x="100"
                       :y="100"
                       :w="100"
                       :h="50"
                       :z="1">
        <img src="../../assets/logo.png"
             alt=""
             width="100"
             height="50" />
      </vue-drag-resize>
    </div>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';

export default {
  name: 'app',
  components: {
    VueDragResize
  },
  data: () => ({
    moveable: {

    }
  }),
  methods: {
  }
};
</script>
<style lang="" scoped>
.container {
  position: relative;
  border: 1px solid #000;
  width: 700px;
  height: 90vh;
  margin: 0 auto;
}
</style>
