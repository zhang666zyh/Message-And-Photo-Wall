<template>
  <div class="yk-modal">
    <div class="yk-modal-head">
      <p class="modal-name">{{ title }}</p>
      <span class="iconfont icon-guanbi1" @click="closeModal"></span>
    </div>
    <div class="yk-modal-main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    default: '标题'
  }
})
const emit = defineEmits(['changeShow'])
const closeModal = () => {
  emit('changeShow')
}

props;
</script>

<style lang="less" scoped>
.modal {
  // 入场
  &-enter {
    &-from {
      transform: translateX(360px);
    }

    &-active {
      transition: @tr ease-out;
    }

    &-to {
      transform: translateX(0px);
    }
  }

  // 出场
  &-leave {
    &-from {
      transform: translateX(0px);
    }

    &-active {
      transition: @tr ease-in;
    }

    &-to {
      transform: translateX(360px);
    }
  }
}

.yk-modal {
  width: 360px;
  height: 948px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px); // 背景模糊
  position: fixed;
  top: 52px;
  right: 0;
  z-index: 1000;
  // padding: @padding-20;

  .yk-modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: @padding-20;
    box-sizing: border-box;

    .modal-name {
      font-size: 16px;
      color: @gray-1;
      font-weight: 600;
    }

    .icon-guanbi1 {
      color: @gray-2;
      cursor: pointer;
      padding-left: 8px;
    }
  }

  .yk-modal-main {
    height: 80%;
    overflow-x: auto;
    overflow-y: auto;
    padding-bottom: 116px;
    box-sizing: border-box;
    margin-left: 2px;
  }
}
</style>