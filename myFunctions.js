// myFunctions.js - يحتوي دوال مشتركة
// دوال صغيرة للمشروع
function isValidAppName(v){ return /^[A-Za-z]+$/.test(v); }
function isValidCompany(v){ return /^[A-Za-z\s]+$/.test(v); }
function isValidURL(v){ try{ new URL(v); return true;}catch(e){return false;} }

// Expose on window for debug
window.f24utils = {
  isValidAppName, isValidCompany, isValidURL
};
