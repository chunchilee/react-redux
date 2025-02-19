# 📦 Redux Toolkit 數據管理專案

## 🌟 簡介
這是一個基於 **React.js** 和 **Redux Toolkit** 的前端專案，主要用於管理應用狀態。透過 **configureStore** 來設定全域狀態，使用 **createSlice** 來定義 reducers 和 **extraReducers** 處理額外的邏輯，並利用 **createAction("app/reset")** 來實現全域重置功能。

專案允許使用者點擊按鈕新增資料，該資料來自 **faker.js**，並且可以單獨刪除某筆資料或透過 `reset()` 清除所有資料。

## 🎨 主要功能

- **使用 Redux Toolkit 管理狀態**，包括 `createSlice` 和 `extraReducers`。
- **點擊按鈕新增數據**，數據來源為 **faker.js**。
- **可以單獨刪除某筆數據**。
- **使用 reset() 來清空所有數據**，透過 `createAction("app/reset")` 來實現。
