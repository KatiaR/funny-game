const delay = (ms = 10) => new Promise(res => setTimeout(() => res(), ms));

export function lifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const widthLife = getComputedStyle(scaleLife).width;
  const reduceLife = 20;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = currentValueLife;
}

export default function compaireClientResult(result) {


  Promise.resolve().then(() => {
    const inputValue = document.getElementsByClassName('form-control')[0].value;
    console.log(inputValue);
    return inputValue;
  }).then((inputValue) => {
    if (+inputValue === +result) {
      console.log('yes');
      // const widthMonsterLife = getComputedStyle(lifeMonster).width;
      // const reduceLife = 20;
      // const currentValueLife = widthMonsterLife - reduceLife;
      // lifeMonster.style.width = currentValueLife;
      lifeDuration();
    } else {
      console.log('no');

      lifeDuration('progress-bar-hero');
    }
  });

}
