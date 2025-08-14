// 사진 순서 변경 기능
const picturesSection = document.querySelectorAll("section")[2]; // 이미지 있는 섹션
picturesSection.addEventListener("click", () => {
  picturesSection.classList.toggle("row-reverse");
});

// Introduce yourself 기능
const introduceBtn = document.getElementById("introduceBtn");
const nameInput = document.getElementById("nameInput");
const contactSection = document.getElementById("contact");

introduceBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    contactSection.innerHTML = `<h2>Contact</h2><p>Nice to meet you ${name} 👋! Thanks for introducing yourself.</p>`;
  }
});
