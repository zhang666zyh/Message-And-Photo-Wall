<template>
  <div class="top-bar">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="一刻时光" class="logo-img" />
      <p class="logo-name">一刻时光</p>
    </div>
    <div class="menu">
      <YkButton
        :nom="getTypeId == 0 ? 'cprimary' : 'csecondary'"
        class="menu-message"
        @btnClick="changeType(0)"
        >留言墙</YkButton
      >
      <YkButton
        :nom="getTypeId == 1 ? 'cprimary' : 'csecondary'"
        class="menu-photo"
        @btnClick="changeType(1)"
        >照片墙</YkButton
      >
    </div>
    <div class="user">
      <div class="user-head"></div>
    </div>
  </div>
</template>

<script>
import YkButton from './YkButton.vue'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getTypeId'
    ])
  },
  components: {
    YkButton
  },
  methods: {
    changeType (id) {
      this.$store.commit('changeType', {
        id
      })
    }
  }
}
</script>

<style lang="less" scoped>
.top-bar {
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); // 背景模糊
  // topbar固定到顶部
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;

  .logo {
    display: flex;
    align-items: center;
    width: 200px;

    .logo-name {
      font-size: 20px;
      color: @gray-1;
      font-weight: 600;
      padding-left: 10px;
    }
  }

  .menu {
    .menu-message {
      margin-right: 24px;
    }
  }

  .user {
    width: 200px;

    .user-head {
      float: right;
      border-radius: 50%;
      height: 36px;
      width: 36px;
      background-image: linear-gradient(
        180deg,
        rgba(81, 169, 255, 0.5) 0%,
        #51a9ff 100%
      );
    }
  }
}
</style>