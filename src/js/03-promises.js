import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

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
  let counter = 0;
  let summaryDelay = values.delay;

  if (values.delay < 0 || values.step < 0 || values.amount <= 0) {
    Notify.failure('Please input positive values');
    return;
  }

  setTimeout(() => {
    const interval = setInterval(() => {
      counter += 1;

      if (counter > values.amount) {
        clearInterval(interval);
        return;
      }

      createPromise(counter, summaryDelay)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });

      summaryDelay += values.step;
    }, values.step);
  }, values.delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
