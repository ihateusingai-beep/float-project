// ============================================================
// Float Project - Firebase 設定
// 請到 Firebase Console 建立項目，然後填入你的設定
// ============================================================

// 🔧 在这里填入你的 Firebase 配置
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// 如果未配置，显示提示
if (FIREBASE_CONFIG.apiKey === "YOUR_API_KEY") {
    console.warn('⚠️ Firebase 未配置！請到 Firebase Console 建立項目並填入配置。');
    console.warn('📝 請修改 firebase-config.js 中的 FIREBASE_CONFIG 物件。');
}