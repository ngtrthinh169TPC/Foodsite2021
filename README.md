# Foodsite2021

Bỏ vào đây mô tả, đặc tả, tài liệu, sơ đồ cơ sở dữ liệu và những thứ khác

Note ngày 18/04/2021: Hướng dẫn chạy trong localhost:

- Tải database, import vào localhost
- Vào file package.json (ở ngoài cùng), thêm
  ,
  "server": "node server.js",
  "client": "npm run start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
  vào phần scripts
- Vào file server/configs/db.configs.js sửa lại host, user, password
- Ở terminal/command line, nhập "npm run dev" để chạy cả server lẫn client cùng lúc. Nhập "npm run server" để chạy server và "npm run client" để chạy client

Note ngày 23/04/2021: Danh sách các dependencies của nodejs:
(Không xuống dòng để copy và install cho dễ :> )
axios bcryptjs concurrently cors express jsonwebtoken mysql mysql2 react react-dom react-router-dom sequelize
