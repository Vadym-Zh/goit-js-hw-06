const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  counterEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  counter.increment();

  counterEl.textContent = counter.value;
});
