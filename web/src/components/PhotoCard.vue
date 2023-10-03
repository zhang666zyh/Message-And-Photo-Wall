<template>
  <div class="yk-photo-card">
    <img
      :key="index"
      :src="require(`@/assets/images/photoWallMock/${photo.imgurl}.jpg`)"
      alt="#"
      class="photo-img"
    />
    <div class="photo-bg" @click="imgPreview(`${photo.imgurl}.jpg`)"></div>
    <div class="photo-like">
      <span class="iconfont icon-xiai"></span>
      <span class="like-data">{{ photo.like }}</span>
    </div>

    <ImgViewer v-if="isShowPreview" />
  </div>
</template>

<script>
import { label, cardColor } from "@/utils/data"

export default {
  props: {
    photo: {
      default: {}
    }
  },
  data () {
    return {
      label,
      cardColor
    }
  },
  methods: {
    imgPreview (imgName) {
      this.$emit('imgPreview', imgName)
    }
  }
}
</script>

<style lang="less" scoped>
.yk-photo-card {
  position: relative;
  cursor: pointer;

  .photo-img {
    width: 100%;
  }

  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .photo-like {
    position: absolute;
    left: @padding-8;
    top: @padding-8;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    opacity: 0;

    .icon-xiai {
      color: @gray-3;
      padding-right: @padding-4;
    }

    &:hover {
      .icon-xiai {
        color: #f86132;
      }
    }

    .like-data {
      color: @gray-1;
    }
  }

  &:hover {
    .photo-bg {
      opacity: 1;
    }

    .photo-like {
      opacity: 1;
    }
  }
}
</style>