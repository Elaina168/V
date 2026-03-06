<script setup>
const introText = `这是一个收集V圈烂梗的网站：~~~~~ 尽情欣赏你们的烂梗吧。

油猴插件点击下载 可在B站直播间一键发送烂梗

开放注册功能，可能会出现收不到邮件的情况。

目前已支持已关注的B站直播间开播提醒

共有 17929 条烂梗，最后投稿时间：2026-03-04 04:20:27

最新投稿烂梗：(点击可复制)原来你们说的加一是点+1啊 不是点回复 难怪@一堆人😂

网站更新日志`

const boxText = `随机一条烂梗(直接点击也能复制)

换一换

@冯骥：玩神，我开发的黑神话悟空还玩吗今年？

标签：喷玩机器

#1412`
</script>
<template>
  <div class="home-layout">

    <!-- 左侧内容 -->
    <div class="home-left">
      <img src="@/assets/banner.png" class="banner" />

      <div class="intro">{{ introText }}</div>

      <div class="box">{{ boxText }}</div>
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