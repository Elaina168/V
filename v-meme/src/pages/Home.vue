<script setup>
import { ref, computed } from "vue";

// 基础数据
const siteName = "vfamily.cn"
const memeCount = 17929
const lastSubmitTime = "2026-03-04 04:20:27"
const latestMeme = "原来你们说的加一是点+1啊 不是点回复 难怪@一堆人😂"



function copyMeme() {
  navigator.clipboard.writeText(latestMeme)
  toast("已复制烂梗")
}

const toastMessage = ref("")
const showToast = ref(false)

function toast(msg){

  toastMessage.value = msg
  showToast.value = true

  setTimeout(()=>{
    showToast.value = false
  },2000)

}

const memeText = ref("玩神，我开发的黑神话悟空还玩吗今年？")

const memeTag = ref("喷玩机器")
const memeId = ref(1412)
const memeTime = ref("2024-11-11")

function copyMeme1(){
  navigator.clipboard.writeText(memeText.value)
  toast("已复制烂梗")
}

function changeMeme(){
  toast("这里以后接随机API")
}


/* 标签库 */
const tags = [
  "经典烂梗",
  "V圈",
  "梗小鬼",
  "直播事故",
  "历史名场面",
  "切片",
  "评论区",
  "粉丝发癫"
];

/* 搜索 */
const search = ref("");

/* 已选标签 */
const selectedTags = ref([]);

/* 投稿内容 */
const memeText1 = ref("");

/* 模糊搜索 */
const filteredTags = computed(() => {
  if (!search.value) return tags;

  return tags.filter(tag =>
    tag.includes(search.value)
  );
});

/* 选择标签 */
function addTag(tag) {
  if (!selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag);
  }
}

/* 删除标签 */
function removeTag(tag) {
  selectedTags.value =
    selectedTags.value.filter(t => t !== tag);
}

/* 投稿 */
function submit() {

  if (!memeText.value.trim()) {
    toast("请输入烂梗内容");
    return;
  }

  console.log({
    text: memeText1.value,
    tags: selectedTags.value
  });

  toast("投稿成功（演示）");

  memeText1.value = "";
  selectedTags.value = [];
}

</script>
<template>
  <div class="home-layout">

    <!-- 左侧内容 -->
    <div class="home-left">
      <img src="@/assets/banner.png" class="banner" />

      <div class="intro">

        <p>
          这是一个收集V圈烂梗的网站：
         <span class="site">{{ siteName }}</span>
          尽情欣赏你们的烂梗吧。
       </p>

        <p>
         油猴插件
         <span class="link">点击下载</span>
         可在B站直播间一键发送烂梗
        </p>

        <p>
         共有
         <span class="green">{{ memeCount }}</span>
         条烂梗，
         最后投稿时间：
         <span class="green">{{ lastSubmitTime }}</span>
        </p>

        <p>
         最新投稿烂梗(点击可复制)：
         <span class="copy" @click="copyMeme">
            {{ latestMeme }}
         </span>
        </p>

      </div>

      <div class="box">
        
        <!-- 标题 -->
        <div class="meme-header">
        <span class="meme-title">
        随机一条烂梗(直接点击复制)
        </span>

        <span class="change" @click="changeMeme">
         换一换
        </span>
     </div>

       <!-- 烂梗内容 -->
       <div class="meme-content" @click="copyMeme1">
         {{ memeText }}
       </div>

       <!-- 标签 -->
        <div class="meme-tags">
          <span class="tag">{{ memeTag }}</span>
       </div>

        <!-- 底部信息 -->
        <div class="meme-info">
          #{{ memeId }} {{ memeTime }}
       </div>

      </div>

      <div class="box">
        <h3>投稿烂梗</h3>

<!-- 已选标签 -->
<div class="selected">
  已选标签：
  <span
    v-for="tag in selectedTags"
    :key="tag"
    class="tag selected-tag"
    @click="removeTag(tag)"
  >
    {{ tag }} ×
  </span>
</div>


<!-- 搜索标签 -->
<div class="tag-search">

  <label>搜索标签：</label>

  <input
    v-model="search"
    placeholder="输入标签关键词..."
  />

</div>

<!-- 搜索结果 -->
<div class="tag-list">

  <span
    v-for="tag in filteredTags"
    :key="tag"
    class="tag"
    @click="addTag(tag)"
  >
    {{ tag }}
  </span>

</div>


<!-- 输入框 -->
<div class="text-box">

  <textarea
    v-model="memeText1"
    maxlength="100"
    placeholder="请输入你要投稿的烂梗..."
  ></textarea>

  <div class="count">
    {{ memeText1.length }}/100
  </div>

</div>


<!-- 投稿按钮 -->
<button
  type="button" class="submit" @click="submit"
>
投稿
</button>
      </div>
    </div>

    <!-- 右侧传送带 -->
    <div class="home-right">
      <div class="scroll-box">
        <img src="@/assets/1.jpg" />
        <img src="@/assets/2.jpg" />
        <img src="@/assets/3.jpg" />
        <img src="@/assets/4.jpg" />
      </div>
    </div>

  </div>

<div v-if="showToast" class="toast">
  {{ toastMessage }}
</div>

</template>