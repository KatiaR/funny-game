

function lifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const widthLife = parseInt(getComputedStyle(scaleLife).width, 10);
  const reduceLife = 60;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = `${currentValueLife}px`;
}

export default function compaireClientResult(result) {
  // Promise.resolve().then(() => {
  //   const inputValue = document.getElementsByClassName('form-control')[0].value;
  //   return inputValue;
  // }).then((inputValue) => {
  //   if (+inputValue === +result) {
  //     lifeDuration('progress-bar-monster');
  //   } else {
  //     lifeDuration('progress-bar-hero');
  //   }
  // });
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (+inputValue === +result) {
    lifeDuration('progress-bar-monster');
  } else {
    lifeDuration('progress-bar-hero');
  }
}
