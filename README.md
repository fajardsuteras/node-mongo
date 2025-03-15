# 🌿 Node Backend

## 📌 Overview
Application Backend Service use **Node.js + TypeScript** and  **MongoDB Atlas** as its database noSQL

## 🛠️ Tech Stack
- **Node.js**
- **TypeScript**

## 🚀 Installation dan Setup
### 1️⃣ Clone Repository
```sh
git clone https://github.com/fajardsuteras/node-mongo
cd node-mongo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run Data Migration
```sh
npx ts-node migrate.ts
```
message if success
```
Data migration successful!
```

### 4️⃣ Run API Service
```sh
npm run dev
```
message if success
```
Server is running on http://localhost:3000
Connected to MongoDB Atlas
```

## 📡 API Routes (Coming Soon)
| Method | Endpoint | Description | Status |
|--------|---------|-------------|--------|
| GET | `/flowers` | retrieve all flower data | Done 🙆 |
| GET | `/flowers/{latin-name}` | retrieve flower data by latin name | Next 🙋‍♂️ |
| POST | `/flowers` | create a flower data | Next 🙋‍♂️ |
| POST | `/flowers/import` | create flower datas by importing csv file | Next 🙋‍♂️ |
