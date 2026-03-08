const express = require("express")
const cors = require("cors")
const Database = require("better-sqlite3")

const app = express()

app.use(cors())
app.use(express.json())

// 数据库
const db = new Database("memes.db")

// 创建表
db.prepare(`
CREATE TABLE IF NOT EXISTS memes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL,
  tag TEXT,
  time TEXT
)
`).run()

// =====================
// 随机烂梗
// =====================
app.get("/api/random",(req,res)=>{
  const meme = db.prepare("SELECT * FROM memes ORDER BY RANDOM() LIMIT 1").get()
  // 如果没数据，给个提示
  res.json(meme || { text: "暂无数据，快去投稿吧！", tag: "系统", id: 0, time: "-" })
})


// =====================
// 投稿烂梗
// =====================
app.post("/api/submit",(req,res)=>{

  const { text, tag } = req.body

  if(!text || text.trim() === ""){
    return res.status(400).json({
      success:false,
      message:"烂梗内容不能为空"
    })
  }

  db.prepare(`
    INSERT INTO memes (text,tag,time)
    VALUES (?, ?, datetime('now'))
  `).run(text.trim(), tag || "")

  res.json({
    success:true,
    message:"投稿成功"
  })

})


// =====================
// 最新投稿
// =====================
app.get("/api/latest",(req,res)=>{

  const meme = db
    .prepare("SELECT * FROM memes ORDER BY id DESC LIMIT 1")
    .get()

  res.json(meme || {})

})


// =====================
// 首页统计
// =====================
app.get("/api/stats", (req, res) => {
  const stats = db
    .prepare(`
      SELECT 
        COUNT(*) as memeCount,
        COALESCE(MAX(time), '') as lastSubmitTime
      FROM memes
    `)
    .get()
  res.json({
    memeCount: stats.memeCount || 0,
    lastSubmitTime: stats.lastSubmitTime || "暂无",
  })
})


// =====================
// 启动服务器
// =====================
app.listen(3000,()=>{
  console.log("API running at http://localhost:3000")
})