<template>
  <div class="wall-message">
    <p class="title">{{ wallType[getTypeId].name }}</p>
    <p class="slogan">{{ wallType[getTypeId].slogan }}</p>
    <div class="label">
      <p
        class="label-list"
        :class="{ lbselected: nlabel === -1 }"
        @click="selectcNode(-1)"
      >
        全部
      </p>
      <p
        class="label-list"
        v-for="(item, index) in label[getTypeId]"
        :key="index"
        :class="{ lbselected: nlabel === index }"
        @click="selectcNode(index)"
      >
        {{ item }}
      </p>
    </div>

    <div class="card" :style="{ width: nWidth + 'px' }" v-if="getTypeId === 0">
      <NoteCard
        v-for="(item, index) in note"
        :key="index"
        :note="item"
        class="card-inner"
        :width="'288px'"
        :class="{ 'card-selected': index == cardSelected }"
        @click="selectCard(index)"
      ></NoteCard>
    </div>

    <div class="photo" v-else>
      <PhotoCard
        :photo="item"
        v-for="(item, index) in photo"
        :key="index"
        class="photo-card"
        @imgPreview="imgPreview"
      />
      <ImgViewer v-if="isShowPreview && getTypeId" :imgName="previewImgName" />
    </div>

    <div
      class="add"
      :style="{ bottom: addBottom + 'px' }"
      @click="changeShow(1)"
    >
      <span class="iconfont icon-tianjia"></span>
    </div>

    <transition name="modal">
      <AddNoteDom
        :title="formType === 0 ? '' : '写留言'"
        @changeShow="changeShow(0)"
        v-if="isShow"
      >
        <AddNoteForm
          v-if="formType !== 0"
          :id="getTypeId"
          @changeShow="changeShow"
        />
        <CardDetail v-else :note="note[cardSelected]" />
      </AddNoteDom>
    </transition>
  </div>
</template>

<script>
import { wallType, label } from "@/utils/data"
import { note, photo } from "../../mock/index"
import NoteCard from '../components/NoteCard.vue'
import PhotoCard from '../components/PhotoCard.vue'
import AddNoteDom from '../components/AddNoteDom.vue'
import AddNoteForm from '../components/AddNoteForm.vue'
import CardDetail from '../components/CardDetail.vue'
import ImgViewer from '../components/ImgViewer.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      wallType,
      label,
      nlabel: -1, // 当前对应的标签
      note: note.data,
      photo: photo.data,
      nWidth: 0, // 卡片模块宽度
      addBottom: 30, // add按钮距离底部高度
      formType: 0, // 弹出窗口模式(0 详情 / 1 添加)
      isShow: false, // 添加留言窗口的显示与否
      cardSelected: -1, // 当前选择卡片
      previewImgName: '', // 当前要预览的图片名
      isShowPreview: false, // 预览的开启与关闭
    }
  },
  computed: {
    ...mapGetters([
      'getTypeId'
    ])
  },
  components: {
    NoteCard,
    AddNoteDom,
    AddNoteForm,
    CardDetail,
    PhotoCard,
    ImgViewer
  },
  methods: {
    selectcNode (index) {
      this.nlabel = index
    },
    getNoteWidth () {
      // 页面宽度
      let wWidth = document.body.clientWidth
      this.nWidth = Math.floor((wWidth - 120) / 300) * 300
    },
    // 监听页面滚动
    scrollBottom () {
      // 距离顶部高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 屏幕高度
      let clientHeight = document.documentElement.clientHeight
      // 内容高度
      let scrollHeight = document.documentElement.scrollHeight
      if (scrollTop + clientHeight + 240 >= scrollHeight) {
        this.addBottom = scrollTop + clientHeight + 240 - scrollHeight
      } else {
        this.addBottom = 30
      }
    },
    changeShow (type) {
      this.formType = type
      this.isShow = !this.isShow
    },
    // 选择卡片
    selectCard (index) {
      this.formType = 0

      if (this.cardSelected !== index) {
        this.cardSelected = index
        this.isShow = true
      } else {
        this.cardSelected = -1
        this.isShow = false
      }
    },
    // 图片预览
    imgPreview (imgName) {
      this.isShowPreview = true
      // this.isShow = true
      this.previewImgName = imgName
    }
  },
  mounted () {
    this.getNoteWidth()
    // 监听屏幕宽度变化
    window.addEventListener('resize', this.getNoteWidth)

    // 监听高度变化
    window.addEventListener('scroll', this.scrollBottom)
  },
  unmounted () {
    window.removeEventListener('resize', this.getNoteWidth)
    window.removeEventListener('scroll', this.scrollBottom)
  }
}
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

.wall-message {
  min-height: 700px;
  padding-top: 52px;

  .title {
    padding-top: 48px;
    padding-bottom: @padding-8;
    font-size: 56px;
    color: @gray-1;
    text-align: center;
    font-weight: 600;
  }

  .slogan {
    color: @gray-1;
    text-align: center;
  }

  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .label-list {
      padding: 0 14px;
      height: 30px;
      line-height: 30px;
      margin: @padding-4;
      color: @gray-2;
      box-sizing: border-box;
    }

    .lbselected {
      color: @gray-1;
      font-weight: 600;
      border: 1px solid @gray-1;
      border-radius: 16px;
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // border: 1px solid red;
    padding: 28px;
    margin: auto;

    .card-inner {
      margin: 6px;
    }

    .card-selected {
      border: 1px solid @primary-color;
    }
  }

  .photo {
    width: 88%;
    margin: 0 auto;
    columns: 6;
    column-gap: @padding-8;
    padding: 28px;

    .photo-card {
      margin-bottom: @padding-8;
    }
  }

  .add {
    width: 56px;
    height: 56px;
    background: @gray-1;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: @tr;

    cursor: pointer;

    .icon-tianjia {
      color: @gray-10;
      font-size: 24px;
    }
  }
}
</style>