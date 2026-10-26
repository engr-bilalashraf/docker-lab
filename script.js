let count = 0;

const countEl = document.getElementById('count');
const btn = document.getElementById('btn');
const timeEl = document.getElementById('time');

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

function updateTime() {
  timeEl.textContent = new Date().toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
