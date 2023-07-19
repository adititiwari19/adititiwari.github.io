// const sentence = "Hi, I'm John Doe. I'm passionate about web development.";
// const typingTextElement = document.getElementById("typing-text");
// const typingCursorElement = document.getElementById("typing-cursor");

// let charIndex = 0;
// let timer = setInterval(() => {
//   typingTextElement.textContent += sentence.charAt(charIndex);
//   charIndex++;

//   if (charIndex === sentence.length) {
//     clearInterval(timer);
//     typingCursorElement.style.display = "none";
//   }
// }, 50);


document.addEventListener("DOMContentLoaded", () => {
  const sentence = "Hi, I'm Aditi. I'm passionate about all things machine learning and artificial intelligence.";
  const typingTextElement = document.getElementById("typing-text");
  const typingCursorElement = document.getElementById("typing-cursor");

  let charIndex = 0;
  let timer = setInterval(() => {
    typingTextElement.textContent += sentence.charAt(charIndex);
    charIndex++;

    if (charIndex === sentence.length) {
      clearInterval(timer);
      typingCursorElement.style.display = "none";
    }
  }, 50);
});


// logo section
document.addEventListener("DOMContentLoaded", () => {
  const contactItems = document.querySelectorAll(".contact-item img");
  const infoDisplay = document.getElementById("info-display");

  contactItems.forEach(item => {
    item.addEventListener("click", () => {
      const info = item.getAttribute("data-info");
      infoDisplay.textContent = info;
      infoDisplay.style.display = "block";
    });
  });
});

//logo
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const infoDisplay = document.getElementById('info-display');
    const dataInfo = event.currentTarget.querySelector('img').getAttribute('data-info');
    infoDisplay.textContent = dataInfo;
  });
});

