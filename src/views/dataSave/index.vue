<template>
  <div>

  </div>

</template>

<script>
export default {
  name: 'dataSave',
  data () {
    return {
      selectdata: [], // 已签名人员名称list 数组
      filelist: [], // 文件数据图片
      otherlist: [{// 其他页签名数据
        id: 111,
        name: 'sfij',
        tempid: '123456',
        page: 1
      }, {
        id: 222,
        name: 'dfase',
        tempid: '3513685789',
        page: 2
      }, {
        id: 111,
        name: 'sfij',
        tempid: '4647',
        page: 3
      }, {
        id: 111,
        name: 'sfij',
        tempid: '345678',
        page: 1
      }], // 存储总体签名及位置数组
      currentlist: [], // 当前页签名数据
      datalist: [],
      params: {}, // 查询参数
      current: 3 // 当前页
    };
  },
  mounted () {
    this.datalist = [...this.otherlist, ...this.currentlist];
    console.log(this.datalist);
    this.currentlist = [];
    this.otherlist = [];
    this.datalist.forEach(item => {
      if (item.page === this.current) {
        this.currentlist.push(item);
      } else {
        this.otherlist.push(item);
      }
    });
    console.log(this.currentlist);
    console.log(this.otherlist);
  },
  methods: {
    // 进入某一页：
    handleCurrentChange (value) {
      // 1、加载新页图片
      // const url = this.filelist[value - 1]; // 获取地址
      // 。。。
      // 2、数据总存；
      this.datalist = [...this.otherlist, ...this.currentlist];
      // 3、赋值新页
      this.current = value;
      // 4、从datalist中分离新页数据和其他页数据；
      this.currentlist = [];
      this.otherlist = [];
      this.datalist.forEach(item => {
        if (item.page === this.current) {
          this.currentlist.push(item);
        } else {
          this.otherlist.push(item);
        }
      });
    }
  }
};
</script>

<style>
</style>
