function playVideo() {
  const link = document.getElementById('linkInput').value;
  const container = document.getElementById('videoContainer');
  if (!link.includes("terabox")) {
    return container.innerHTML = "<p>❌ Invalid Terabox link.</p>";
  }

  const iframe = `
    <iframe src="${link.replace('/s/', '/file/').replace('?path=%2F', '')}" 
      width="100%" height="500px" frameborder="0" allowfullscreen></iframe>`;
  container.innerHTML = iframe;
}

// Theme toggle
const toggle = document.getElementById("theme-switch");
toggle.addEventListener("change", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Load theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.getElementById("theme-switch").checked = savedTheme === "dark";
});
