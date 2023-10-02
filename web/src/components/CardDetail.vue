<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke">联系墙主撕掉该标签</p>
      <p class="report">举报</p>
    </div>

    <NoteCard :note="note" width="100%" />

    <div class="form">
      <textarea class="message" placeholder="请输入..."></textarea>
      <div class="bt">
        <input type="text" class="sign" placeholder="签名" />
        <YkButton>确定</YkButton>
      </div>
    </div>

    <p class="title">评论{{ note.comment }}</p>
    <div class="comment">
      <div class="comment-li" v-for="(item, index) in comments" :key="index">
        <div
          class="user-head"
          :style="{ 'background-image': portrait[item.imgurl] }"
        ></div>
        <div class="comm-m">
          <div class="m-top">
            <p class="name">{{ item.name }}</p>
            <p class="time">{{ dateOne(item.moment) }}</p>
          </div>
          <div class="mm">
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NoteCard from './NoteCard.vue'
import YkButton from './YkButton.vue'
import { defineProps, ref } from 'vue'
import { portrait } from "@/utils/data"
import { comment } from "../../mock/index"
import { dateOne } from "@/utils/timeFormat.js"

const comments = ref(comment.data)

const props = defineProps({
  note: {
    default: {}
  }
})
props;

</script>

<style lang="less" scoped>
.card-detail {
  padding: 0 @padding-20;

  .top-bt {
    // border: 1px solid red;
    position: fixed;
    top: 0;
    left: 0;
    padding: @padding-20;

    display: flex;
    .revoke {
      color: @primary-color;
      cursor: pointer;
      padding-right: 30px;
      font-size: @size-16;
    }

    .report {
      font-size: @size-16;
      color: @warning-color;
      cursor: pointer;
    }
  }

  .form {
    .message {
      background: none;
      border: 1px solid rgb(148, 148, 148);
      resize: none;
      height: 56px;
      box-sizing: border-box;
      width: 100%;
      font-family: HanziPenSC-W3;
      margin-top: @padding-12;
    }

    .bt {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      .sign {
        width: 200px;
        box-sizing: border-box;
        padding: @padding-8;
        background: none;
        border: 1px solid rgb(148, 148, 148);
        line-height: 20px;
      }
    }
  }

  .title {
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .comment {
    .comment-li {
      display: flex;
      padding-bottom: 30px;

      .user-head {
        flex: none;
        width: 28px;
        height: 28px;
        border-radius: 20px;
        overflow: hidden;
        // background-image: linear-gradient(
        //   180deg,
        //   rgba(245, 65, 65, 0.5) 0%,
        //   #f43f3f 100%
        // );
      }

      .comm-m {
        padding-left: @padding-8;
      }

      .m-top {
        display: flex;
        align-items: center;

        .name {
          font-weight: 600;
        }

        .time {
          font-size: @size-12;
          padding-left: @padding-4;
          color: @gray-3;
        }
      }

      .mm {
        padding-top: @padding-4;
        font-family: HanziPenSC-W3;
      }
    }
  }
}
</style>