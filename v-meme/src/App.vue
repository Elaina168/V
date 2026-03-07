<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="layout">

    <!-- 顶部导航栏-->
     <header class="navbar">
      <div class="nav-left">
        <img src="/src/assets/avatar.png" class="avatar" />
        <span class="title">V圈烂梗收集库</span>
      </div>

      <div class="nav-center">
        <input placeholder="搜索烂梗..." />
      </div>

      <div class="nav-right">
        <span>上传建议/BUG</span>
        <span>点赞</span>
        <span>用户</span>
      </div>
     </header>

    <!-- 主体 -->
    <div class="main">

      <!-- 左侧菜单-->
      <aside class="sidebar">
        <router-link to="/">首页</router-link>
        <router-link to="/all">全部烂梗</router-link>
        <router-link to="/disclaimer">免责声明</router-link>
      </aside>

      <!-- 右侧内容区-->
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url("/src/assets/bg.jpg") no-repeat center center fixed;
  background-size: cover;
}

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

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 顶部导航 */
.navbar {
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: rgba(255, 255, 255, 0.1); /* 半透明 */
  backdrop-filter: blur(10px);          /* 毛玻璃 */
  -webkit-backdrop-filter: blur(10px);  /* 兼容 */

  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.title {
  font-size: 25px;
  font-weight: bold;
}

.nav-center input {
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
}

.nav-right span {
  margin-left: 15px;
  cursor: pointer;
}

/* 主体 */
.main {
  display: flex;
  margin-top: 60px; /* 避开固定导航栏 */
  flex: 1;
}

/* 左侧菜单 */
.sidebar {
  position: fixed;
  top: 60px;          /* 紧贴导航栏下面 */
  left: 0;
  bottom: 0;          /* 一直到最底部 */

  width: 200px;
  padding-top: 20px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border-right: 1px solid rgba(255,255,255,0.15);
}

.sidebar a {
  display: block;  
  padding: 20px 35px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  border-radius: 15%;
}

.sidebar a:hover {
  background: #1f1f1f;
  color: white;
}

.sidebar .router-link-active {
  background: #333;
  color: white;
  font-weight: bold;
}

/* 内容区 */
.content {
  flex: 1;
  padding: 20px;
  margin-left: 220px;
  background: transparent;
  min-height: 1500px;
  border-radius: 15px;
}

.banner {
  
  width: 20%;        /* 控制大小 */
  display: block;    /* 让它变成块级元素 */
  margin: 20px auto; /* 上下30px，左右自动居中 */
  border-radius: 10px;
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

/* 网站名 */
.site{
  color:#ff3b3b;
  font-size:20px;
  font-weight:bold;
}

/* 蓝色链接 */
.link{
  color:#409eff;
  cursor:pointer;
}

.link:hover{
  text-decoration:underline;
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
  background:#f2f2f2;
  border-radius:15px;
  font-size:12px;
}

/* 投稿信息 */
.meme-info{
  font-size:12px;
  color:#888;
}

/* 已选标签 */
.selected{
  margin-bottom:10px;
}

.selected-tag{
  background:#409eff;
  color:white;
  cursor:pointer;
}


/* 搜索框 */
.tag-search{
  margin-bottom:10px;
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

.tag{
  display:inline-block;
  padding:5px 10px;
  margin:5px;
  background:#eee;
  border-radius:15px;
  font-size:12px;
  cursor:pointer;
}

.tag:hover{
  background:#ddd;
}


/* 输入框 */
.text-box{
  position:relative;
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

.home-layout {
  display: flex;
  justify-content: space-between; 
  padding: 20px;
}

.home-left {
  flex: 1;
  max-width: 1100px;
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
