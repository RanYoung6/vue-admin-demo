
<template>
  <div class="hello">
    <div id="test"
         style="width: 0px; height: 12px; line-height: 12px; margin-bottom: 5px; background: rgb(185, 236, 243);"></div>
    当前进度：<span id="progress">0%</span>
    <button id="btn">开启</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      timer: null
    };
  },
  mounted () {
    const btn = document.getElementById('btn');
    const test = document.getElementById('test');
    const progress = document.getElementById('progress');
    // 使用 requestAnimationFrame 实现
    btn.onclick = function () {
      var timer = requestAnimationFrame(function fn () {
        if (parseInt(test.style.width) < 300) {
          test.style.width = parseInt(test.style.width) + 3 + 'px';
          progress.innerHTML = parseInt(test.style.width) / 3 + '%';
          timer = requestAnimationFrame(fn);
        } else { cancelAnimationFrame(timer); }
      });
    };
    // 使用 setInterval 实现
    // btn.onclick = function () {
    //   var timer = setInterval(function () {
    //     if (parseInt(test.style.width) < 300) {
    //       test.style.width = parseInt(test.style.width) + 3 + 'px';
    //       progress.innerHTML = parseInt(test.style.width) / 3 + '%';
    //     } else {
    //       clearInterval(timer);
    //     }
    //   }, 1000 / 60);
    // };

    // 使用 setTimeout 实现
    // btn.onclick = function () {
    //   var timer = setTimeout(function fn () {
    //     if (parseInt(test.style.width) < 300) {
    //       test.style.width = parseInt(test.style.width) + 3 + 'px';
    //       progress.innerHTML = parseInt(test.style.width) / 3 + '%';
    //       timer = setTimeout(fn, 17);
    //     } else {
    //       clearTimeout(timer);
    //     }
    //   }, 1000 / 60);
    // };
  },
  methods: {
    handleSelect (timeStr) {
      console.log(timeStr);
      console.log('test git');
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
