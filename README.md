# BCARD - מערכת לכרטיסי ביקור דיגיטליים

BCARD היא אפליקציית רשת לבניית וניהול כרטיסי ביקור דיגיטליים, המיועדת לעסקים קטנים, פרילנסרים ומשתמשים פרטיים.  
האפליקציה מאפשרת ליצור, לערוך, למחוק ולצפות בכרטיסי ביקור – עם אפשרות למשתמשים עסקיים בלבד.

---

## 🚀 טכנולוגיות

- **React** (עם TypeScript)
- **Vite** – לבניית הפרויקט והרצה מהירה
- **Formik + Yup** – לניהול טפסים ואימות נתונים
- **Leaflet + Nominatim API** – להצגת מיקום על מפה לפי כתובת
- **Toastify** – להצגת הודעות הצלחה/שגיאה
- **Context API** – לניהול מצב משתמשים ולייקים
- **JWT Auth** – לניהול הרשאות וגישה
- **ESLint + Prettier** – לאיכות קוד

---

## 🧩 פיצ'רים עיקריים

- 📇 יצירת כרטיס ביקור עם פרטים כמו: שם עסק, תיאור, טלפון, אימייל, כתובת ותמונה
- 🌐 הצגת מיקום הכרטיס על מפה לפי הכתובת (באמצעות Leaflet)
- ❤️ אפשרות ללייקים (רק למשתמשים עסקיים)
- 👤 הרשאות מבוססות משתמש:
  - משתמש רגיל: יכול לצפות בכרטיסים
  - משתמש עסקי: יכול ליצור ולנהל כרטיסים
  - משתמש לא מחובר: מוגבל בגישה
- 🧠 שמירה של הלייקים גם אחרי רענון הדף
- ✏️ עריכת ומחיקת כרטיסים – רק על ידי היוצר שלהם
- 🔒 ניהול גישה לפי JWT Token

---



