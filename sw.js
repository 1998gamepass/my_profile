// 極簡 SW：不攔截、不快取，只為了符合可安裝條件
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
// （未做快取邏輯，日後可擴充）
