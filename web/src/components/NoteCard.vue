<template>
  <div
    class="note-card"
    :style="{ width: width, background: cardColor[note.imgurl] }"
  >
    <div class="top">
      <p class="time">{{ dateOne(note.moment) }}</p>
      <p class="label">{{ label[note.type][note.label] }}</p>
    </div>
    <p class="message">{{ note.message }}</p>
    <div class="foot">
      <div class="foot-left">
        <div class="icon">
          <span class="iconfont icon-xiai"></span>
          <span class="value">{{ note.like }}</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-liuyan"></span>
          <span class="value">{{ note.comment }}</span>
        </div>
      </div>
      <div class="name">{{ note.name }}</div>
    </div>
  </div>
</template>

<script>
import { label, cardColor } from "@/utils/data"
import { dateOne } from "@/utils/timeFormat"
export default {
  props: {
    width: {
      default: '288px',
    },
    note: {
      default: {}
    }
  },
  data () {
    return {
      label,
      dateOne,
      cardColor
    }
  }
}
</script>

<style lang="less" scoped>
.note-card {
  height: 240px;
  background: rgba(252, 175, 162, 0.3);
  padding: 10px 20px 16px;
  box-sizing: border-box;

  position: relative;

  .top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    p {
      font-size: 12px;
      color: @gray-3;
    }
  }

  .message {
    height: 140px;
    font-family: HanziPenSC-W3;
    font-size: 15px;
    color: @gray-1;

    cursor: pointer;
  }

  .foot {
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 16px;
    width: 100%;

    left: 0%;
    padding: 0 @padding-20;
    box-sizing: border-box;

    .foot-left {
      display: flex;

      .value {
        font-size: @size-12;
        color: @gray-3;
        line-height: 16px;
        padding-left: @padding-4;
      }

      .iconfont {
        font-size: 16px;
        color: @gray-2;
      }

      .icon {
        padding-right: @padding-8;
        display: flex;
        align-items: center;

        .icon-xiai {
          cursor: pointer;
          transition: @tr;
          &:hover {
            color: @like;
          }
        }
      }
    }
  }

  .name {
    font-family: HanziPenSC-W3;
    font-size: 17px;
    color: @gray-1;
  }
}
</style>