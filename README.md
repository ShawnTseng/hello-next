# 初始化

## Git clone 完後需連結vercel、取得環境變數、並加入github及nextauth url的設定
1. npm install
2. npx vercel link
3. npx vercel env pull .env
4. add these config to .env

```
# GitHub OAuth
GITHUB_ID=xxx
GITHUB_SECRET=xxx
NEXTAUTH_URL=http://localhost:3000/api/auth
```

5. npm run dev
<!-- npx prisma generate -->

## 待辦
- [ ] 變更專案名稱
- [ ] 按下 Link 後的 loading 畫面
- [ ] 移除登入設定
- [ ] 設計另一種方式新增文章
- [ ] 確認功能列表
- [ ] 學習 AWS Amplify，暫時使用 Vercel

## 功能列表
- [ ] 顯示所有文章
- [ ] 閱讀單篇文章
- [ ] 新增文章
    - [ ] 發至草稿
    - [ ] 直接發佈
    - [ ] 捨棄草稿
- [ ] 草稿轉發佈
- [ ] 刪除草稿
- [ ] 標籤功能
    - [ ] 增刪修標籤
    - [ ] 標籤過濾文章

## 學習
- PostgreSQL
- ORM: Prisma 或其他套
- Nextjs
- React Markdown
- Vercel
- Vercel Postgre
