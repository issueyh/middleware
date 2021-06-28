# Middleware
Middleware 練習
### Q1: 伺服器接收請求紀錄
- 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 請求的 HTTP 方法
- URL
### Q2: 伺服器回應的時間
- 承Q1，加入伺服器回應時間的total time

## 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
```
$ git clone https://github.com/issueyh/middleware.git
```
2. 安裝 npm 套件
```
$ npm install
```
3. 執行程式
```
$ npm run dev
```
4. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
```
Express is running on http://localhost:3000
```
5. 開啟任一瀏覽器瀏覽器輸入
```
http://localhost:3000
```

## 環境建置
* Node.js: 10.15.0
* Express: 4.17.1