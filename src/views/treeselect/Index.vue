<!-- Vue SFC -->
<template>
  <div id="app">
    <div style="width:30vw;">
      <!-- :disabled为false用于查看时禁用 -->
      <!-- :searchable为false用于禁用输入框 -->
      <treeselect v-model="value"
                  :options="options"
                  :cacheOptions="false"
                  :normalizer="normalizerFun"
                  placeholder="请选择节点"
                  :disabled=false
                  :searchable=false
                  @select="handleSelect" />
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';
// 需要vue2.2+
// npm install --save @riophae/vue-treeselect
export default {
  components: { Treeselect },
  data () {
    return {
      value: 'ab', // 与id相匹配
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa',
          children: []
        }, {
          id: 'ab',
          label: 'ab',
          children: [{
            id: 'aba',
            label: 'aba',
            children: [{
              id: 'abaa',
              label: 'abaa',
              children: []// 支持多层级
            }]
          }, {
            id: 'abb',
            label: 'abb',
            children: []
          }]
        }]
      }, {
        id: 'b',
        label: 'b',
        children: []
      }, {
        id: 'c',
        label: 'cc',
        children: []
      }],
      normalizerFun (node) {
        return {
          id: node.id,
          label: node.label,
          children: node.children && node.children.length > 0 ? node.children : 0 // 处理children为空数组的问题
        };
      }
    };
  },
  methods: {
    handleSelect (node) {
      console.log(node);
    }

  }
};
</script>
