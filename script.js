function playVideo() {
  const linkInput = document.getElementById("linkInput").value;
  const videoBox = document.getElementById("videoBox");

  if (!linkInput.includes("terabox")) {
    videoBox.innerHTML = "<p style='color:red'>Invalid Terabox link</p>";
    return;
  }

  const videoId = linkInput.split("/").pop().split("?")[0];
  const embedUrl = `https://www.terabox.com/sharing/embed?surl=${videoId}`;

  videoBox.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
