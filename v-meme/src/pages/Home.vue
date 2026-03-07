<script setup>
import { ref, computed } from "vue";

// 基础数据
const memeCount = ref(17929); /* 烂梗总数 */
const lastSubmitTime = ref("2026-03-04 04:20:27");
const latestMeme = ref("原来你们说的加一是点+1啊 不是点回复 难怪@一堆人😂");
const toastMessage = ref("");
const showToast = ref(false);
const memeText = ref("玩神，我开发的黑神话悟空还玩吗今年？");
const memeTag = ref("喷玩机器");
const memeId = ref(1412);
const memeTime = ref("2024-11-11");

const tags = [
  "经典烂梗",
  "V圈",
  "梗小鬼",
  "直播事故",
  "历史名场面",
  "切片",
  "评论区",
  "粉丝发癫"
];/* 标签库 */

const search = ref("");/* 搜索 */
const selectedTags = ref([]);/* 已选标签 */
const memesubmit = ref("");/* 投稿内容 */

function copyMeme() {
  navigator.clipboard.writeText(latestMeme)
  toast("已复制烂梗")
}

function toast(msg){
  toastMessage.value = msg
  showToast.value = true
  setTimeout(()=>{
    showToast.value = false
  },2000)
}

function changeMeme(){
  toast("这里以后接随机API")
}

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

  if (!memesubmit.value.trim()) {
    toast("请输入烂梗内容");
    return;
  }

  toast("投稿成功（演示）");

  memesubmit.value = "";
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
         <span class="site">vfamily.cn</span>
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
         条烂梗，最后投稿时间：
         <span class="green">{{ lastSubmitTime }}</span>
        </p>

        <p>
         最新投稿烂梗(点击可复制)：
         <span class="copy" @click="copyMeme">{{ latestMeme }}</span>
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
       <div class="meme-content" @click="copyMeme">
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
        <span class="meme-title">投稿烂梗</span>
        <!-- 已选标签 -->
        <div class="selected">已选标签：
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
          <input v-model="search" placeholder="输入标签关键词..."/>
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
            v-model="memesubmit"
            maxlength="100"
            placeholder="请输入你要投稿的烂梗..."
         >
        </textarea>

          <div class="count">
            {{ memesubmit.length }}/100
          </div>
        </div>

        <!-- 投稿按钮 -->
        <button type="button" class="submit" @click="submit">
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

<style scoped>

.toast{
  position:fixed;
  top:80px;
  left:50%;
  transform:translateX(-50%);
  background:#2ecc71;
  color:white;
  padding:10px 22px;
  border-radius:10px;
  font-size:14px;
  box-shadow:0 6px 20px rgba(0,0,0,0.2);
  animation:toastMove 2s;
  z-index:9999;
}

@keyframes toastMove{

  0%{
    opacity:0;
    transform:translate(-50%,-20px);
  }

  15%{
    opacity:1;
    transform:translate(-50%,0);
  }

  85%{
    opacity:1;
  }

  100%{
    opacity:0;
    transform:translate(-50%,-20px);
  }

}

.home-layout {
  display: flex;
  padding: 20px;
}

.home-left {
  flex: 1;
  max-width: 1100px;
}

.banner {
  width: 20%;       
  display: block;   
  margin: 20px auto; 
  border-radius: 10px;
}

.site{
  color:#ff3b3b;
  font-size:20px;
  font-weight:bold;
}

/* 油猴链接 */
.link{
  color:#409eff;
  cursor:pointer;
}

.link:hover{
  text-decoration:underline;
}


.home-right {
  width: 200px;
  height: 700px;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 1200px;
  border-radius: 15px;
  position: fixed;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}

.intro,
.box {
  white-space: pre-wrap;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  background: rgba(255,255,255,0.85);
  border-radius: 12px;
}

.intro p{
  margin-bottom: 12px;
  line-height: 1.7;
}

/* 绿色数字 */
.green{
  color:#2ecc71;
  font-weight:bold;
}

/* 可复制文本 */
.copy{
  cursor:pointer;
  color:#555;
  font-weight:bold;
}

.copy:hover{
  color:#000;
}

/* 标题行 */
.meme-header{
  display:flex;
  justify-content:space-between;
  margin-bottom:15px;
}

.meme-title{
  font-weight:bold;
  font-size:16px;
}

.change{
  color:#409eff;
  cursor:pointer;
}

.change:hover{
  text-decoration:underline;
}

/* 烂梗内容 */
.meme-content{
  color:#409eff;
  font-size:18px;
  margin-bottom:15px;
  cursor:pointer;
}

/* 标签 */
.meme-tags{
  margin-bottom:10px;
}

.tag{
  display:inline-block;
  padding:4px 10px;
  background: #bdbcbc;
  border-radius:15px;
  font-size:12px;
}

.tag:hover{
  background:#949393;
}

/* 投稿信息 */
.meme-info{
  font-size:12px;
  color:#888;
}

/* 已选标签 */
.selected{
  font-size:18px;
  margin-bottom: 10px;
}

.selected-tag{
  background:#bdbcbc;
  cursor:pointer;
}

/* 搜索框 */
.tag-search{
  font-size:18px;
  margin-bottom:15px;
}

.tag-search input{
  margin-left:10px;
  padding:6px;
  border-radius:6px;
  border:1px solid #ccc;
}

/* 标签列表 */
.tag-list{
  margin-bottom:15px;
}

/* 输入框 */
.text-box{
  position:relative;
  margin-right: 50px;
}

textarea{
  width:100%;
  height:100px;
  resize:none;
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
}

/* 字数统计 */
.count{
  position:absolute;
  right:10px;
  bottom:8px;
  font-size:12px;
  color:#666;
}

/* 投稿按钮 */
.submit{
  margin-top:10px;
  background:#2ecc71;
  color:white;
  border:none;
  padding:10px 20px;
  border-radius:10px;
  cursor:pointer;
}

.submit:hover{
  background:#27ae60;
}

/* 传送带 */
.scroll-box {
  display: flex;
  flex-direction: column;
  animation: scrollUp 10s linear infinite;
}

.scroll-box img {
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
}

@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

</style>