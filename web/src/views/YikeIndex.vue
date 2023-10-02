<template>
  <div class="wall-index">
    <TopBar />
    <!-- background - video -->
    <video
      src="@/assets/images/qm.mp4"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      class="bg-video"
    ></video>
    <router-view></router-view>

    <FootBar />
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import FootBar from '../components/FootBar.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    // 组件
    TopBar,
    FootBar
  },
  computed: {

  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.axios.post("http://182.61.20.123:3001/singin/match", {
        data: 'aaa',
        pwd: 'bbb'
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wall-index {
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 880px;
  }
}
</style>