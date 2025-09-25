const year = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.innerHTML = `© ${year}
  <span class="l-c" style="cursor:pointer;" onclick="openInstagramdev()">Ahmed Eweis</span>
  جميع الحقوق محفوظة | تصميم وتطوير بواسطة`;
  }
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("dropdown-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  }
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeToggle) darkModeToggle.innerHTML = "☀️";
  };
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeToggle) darkModeToggle.innerHTML = "🌙";
  };
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  }
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
});
function openTelegram() {
  window.location.href = "tg://resolve?domain=BaR0dy";
  setTimeout(() => {
    window.location.href = "https://t.me/BaR0dy";
  }, 1000);
}
function openInstagram() {
  window.location.href = "instagram://user?username=bar0dy";
  setTimeout(() => {
    window.location.href = "https://www.instagram.com/bar0dy/";
  }, 1000);
}
function openTikTok() {
  window.location.href = "snssdk1128://user/profile/your_user_id";
  setTimeout(() => {
    window.location.href =
      "https://www.tiktok.com/@bar0dy?_t=ZS-8wpxhNQu5Vn&_r=1";
  }, 1000);
}
function openWhatsAppChannel() {
  // محاولة فتح التطبيق باستخدام رابط مخصص (قد يحتاج تعديلًا)
  window.location.href = "whatsapp://channel/0029Vb67LWQ1Hspxe5U47c0f";
  setTimeout(() => {
    // إذا فشل، افتح الرابط الويب
    window.location.href =
      "https://whatsapp.com/channel/0029Vb67LWQ1Hspxe5U47c0f";
  }, 5000);
}
function openInstagramdev() {
  window.location.href = "instagram://user?username=ahmed_eweis0";
  setTimeout(() => {
    window.location.href = "https://www.instagram.com/ahmed_eweis0/";
  }, 1000);
}
