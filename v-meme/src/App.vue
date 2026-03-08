<script setup>

import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 定义需要滚动到顶部的路由路径
const scrollRoutes = ["/", "/all", "/disclaimer"];

// 监听路由变化，包括初始加载时，如果是指定页面则滚动到顶部
watch(() => route.path, (newPath) => {
  if (scrollRoutes.includes(newPath)) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}, { immediate: true });

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
  font-weight: bold;
}

.sidebar a:hover {
  background: #1f1f1f;
  color: white;
  font-weight: bold;
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

</style>
