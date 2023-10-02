<template>
  <div class="new-card">
    <div class="colors">
      <p
        class="color-li"
        :class="{ 'color-li-selected': index == colorSelected }"
        @click="selectColor(index)"
        :style="{ background: item }"
        v-for="(item, index) in cardColorOne"
        :key="index"
      ></p>
    </div>
    <div class="card-main" :style="{ background: cardColor[colorSelected] }">
      <textarea placeholder="留言..." class="message" maxlength="96"></textarea>
      <input type="text" placeholder="签名" class="sign" />
    </div>

    <div class="labels">
      <p class="title">选择标签</p>
      <div class="label">
        <p
          v-for="(e, index) in label[id]"
          :key="index"
          class="label-li"
          :class="{ 'label-li-selected': index === labelSelected }"
          @click="selectLabel(index)"
        >
          {{ e }}
        </p>
      </div>
    </div>
    <div class="mzsm">
      <p class="title">免责声明</p>
      <p class="content">
        一刻时光是本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br />
        1、反对宪法所确定的基本原则的；<br />
        2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br />
        3、损害国家荣誉和利益的； 4、煽动民族仇恨、民族歧视，破坏民族团结的；<br />
        5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
        6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
        7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
        8、侮辱或者诽谤他人，侵害他人合法权益的；<br />
        9、含有法律、行政法规禁止的其他内容的信息。
      </p>
    </div>
    <div class="footbt">
      <YkButton size="max" nom="secondary" @click="closeModal">丢弃</YkButton>
      <YkButton size="max" @click="closeModal">确定</YkButton>
    </div>
  </div>
</template>

<script setup>
import { cardColor, cardColorOne, label } from "@/utils/data.js"
import YkButton from './YkButton.vue'
import { ref, defineProps, defineEmits } from 'vue'

const colorSelected = ref(0)
const labelSelected = ref(0)

const selectColor = (index) => {
  colorSelected.value = index
}
const selectLabel = (index) => {
  labelSelected.value = index
}


const emit = defineEmits(['changeShow'])
const closeModal = () => {
  emit('changeShow')
}

const props = defineProps({
  id: {
    default: 0
  }
})

props;
</script>

<style lang="less" scoped>
.new-card {
  padding: 0 @padding-20;

  .colors {
    height: 36px;
    display: flex;
    align-items: center;
    .color-li {
      width: 24px;
      height: 24px;
      margin-right: @padding-8;
      float: left;
      cursor: pointer;
    }

    .color-li-selected {
      border: 1px solid rgb(59, 115, 240);
    }
  }

  .card-main {
    height: 240px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;

    .message {
      background: none;
      border: none;
      resize: none;
      height: 172px;
      width: 100%;
      font-family: HanziPenSC-W3;
      font-size: 15px;
    }

    .sign {
      width: 100%;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      border: #fff 1px solid;
      line-height: 20px;
      font-family: HanziPenSC-W3;
    }
  }

  .labels {
    .title {
      color: @gray-1;
      font-weight: 600;
      padding-top: 30px;
    }

    .label {
      display: flex;
      flex-wrap: wrap;
      width: 320px;

      .label-li {
        padding: 2px 10px;
        border-radius: 20px;
        margin: 16px @padding-4 0 0;
        cursor: pointer;
        color: @gray-2;
        transition: @tr;
      }

      .label-li-selected {
        background: #ebebeb;
        font-weight: 600;
        color: @gray-1;
      }
    }
  }
  .mzsm {
    .title {
      color: @gray-1;
      font-weight: 600;
      padding-top: 30px;
    }
    .content {
      font-size: 12px;
      color: @gray-3;
      padding: 10px 0 200px 0;
    }
  }

  .footbt {
    padding: @padding-20 0;
    position: fixed;
    bottom: 290px;
    left: 0;
    display: flex;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
  }
}
</style>