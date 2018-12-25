export function lifeDuration(scaleLife) {
  const widthLife = getComputedStyle(scaleLife).width;
  const reduceLife = 20;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = currentValueLife;
}

export default function compaireClientResult(result) {
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (inputValue === result) {
    const lifeMonster = document.getElementsByClassName('progress-bar-monster')[0];
    // const widthMonsterLife = getComputedStyle(lifeMonster).width;
    // const reduceLife = 20;
    // const currentValueLife = widthMonsterLife - reduceLife;
    // lifeMonster.style.width = currentValueLife;
    lifeDuration(lifeMonster);
  } else {
    const lifeHero = document.getElementsByClassName('progress-bar-hero')[0];
    lifeDuration(lifeHero);
  }
}
