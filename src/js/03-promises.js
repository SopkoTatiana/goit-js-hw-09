import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};
let summaryDelay;

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  const values = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };

  summaryDelay = values.delay;

  if (values.delay < 0 || values.step < 0 || values.amount <= 0) {
    Notify.failure('Please input positive values');
    return;
  }

  for (let i = 1; i < values.amount; i += 1) {
    createPromise(i, summaryDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    summaryDelay += values.step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, summaryDelay);
  });
}
