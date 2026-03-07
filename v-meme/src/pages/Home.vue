<script setup>
const siteName = "vfamily.cn"
const memeCount = 17929
const lastSubmitTime = "2026-03-04 04:20:27"
const latestMeme = "原来你们说的加一是点+1啊 不是点回复 难怪@一堆人😂"

function copyMeme() {
  navigator.clipboard.writeText(latestMeme)
  alert("已复制烂梗")
}

import { ref } from "vue"

const memeText = ref("玩神，我开发的黑神话悟空还玩吗今年？")

const memeTag = ref("喷玩机器")
const memeId = ref(1412)
const memeTime = ref("2024-11-11")

function copyMeme1(){
  navigator.clipboard.writeText(memeText.value)
  alert("已复制烂梗")
}

function changeMeme(){
  alert("这里以后接随机API")
}
const boxText2 = `可选标签 
已选标签:
暂无已选标签(点击下面标签进行筛选)
所有标签:

喷玩机器

喷选手
输入你要投稿的烂梗....
0 / 255`
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

         <p>
          <span class="link">网站更新日志</span>
        </p>

      </div>

      <div class="box">
        
        <!-- 标题 -->
        <div class="meme-header">
        <span class="meme-title">
        随机一条烂梗(直接点击也能复制)
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

      <div class="box">{{ boxText2 }}</div>
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
</template>