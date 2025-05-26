const buttons = document.querySelectorAll('button');
const correctButtonIndex = 1; // Вторая кнопка — верная
const body = document.body;
const screamer = document.getElementById('screamer');

// Звук скримера (замените на свой)
const screamerSound = new Audio('video_1.mp3');
screamerSound.loop = true; // Повтор

// Клик по неверной кнопке
function triggerScreamer() {
  // 1. Чёрный интерфейс + блокировка кнопок
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
  });
  
  // 2. Показываем сообщение
  const wrongMessage = document.getElementById('wrong-message');
  wrongMessage.classList.remove('hidden');

  // 3. Через 2 секунды — скример
  setTimeout(() => {
    screamer.classList.remove('hidden');
    screamerSound.play(); // Запуск звука
    const screamerImg = screamer.querySelector('img');
    screamerImg.classList.add('inverting');
    // 4. Через ещё 1 секунду показываем угрозу и таймер
    setTimeout(() => {
      // Обратный отсчёт
      let seconds = 10;
      const timer = setInterval(() => {
        seconds--;
        countdown = seconds;
        
        if (seconds <= 0) {
          clearInterval(timer);
          window.location.href = "end.html"; // Перенаправление
        }
      }, 1000);
    }, 1000);
  }, 2000);
}


// Обработчики кликов
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === correctButtonIndex) {
      // Победа (как раньше)
      button.style.backgroundColor = "green";
      buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
      });
    } else {
      triggerScreamer(); // Запускаем скример
    }
  });
});