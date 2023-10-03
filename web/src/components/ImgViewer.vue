<template>
  <div class="yk-viewer">
    <div class="bg"></div>
    <div class="viewer-photo">
      <img :src="require(`@/assets/images/photoWallMock/${imgName}`)" alt="#" />
    </div>
    <div class="switch sw-left">
      <span class="iconfont icon-xiangzuo1"></span>
    </div>
    <div class="switch sw-right">
      <span class="iconfont icon-xiangyou1"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgName: {
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.yk-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  padding-right: 360px;
  box-sizing: border-box;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    height: 100%;
    width: 100%;
  }

  .viewer-photo {
    position: absolute;
    padding: 82px 45px 0px 96px;
    width: 100%;
    height: 100%;
    padding-right: 350px;
    box-sizing: border-box;
    overflow-y: auto;

    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  .switch {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: @gray-3;
    color: @gray-10;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: @tr;
    cursor: pointer;

    .iconfont {
      font-size: 24px;
    }

    &:hover {
      opacity: 1;
    }
  }

  .sw-left {
    left: 20px;
  }

  .sw-right {
    right: 380px;
  }
}
</style>