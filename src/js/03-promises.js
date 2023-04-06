import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const {
    elements: { delay, step, amount },
  } = form;
  const values = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };

  let summaryDelay = values.delay;

  if (values.delay < 0 || values.step < 0 || values.amount <= 0) {
    Notify.failure('Please input positive values');
    return;
  }

  clearFormInput(form.elements);

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

function clearFormInput(obj) {
  for (const el of obj) {
    el.value = '';
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
    }, delay);
  });
}
