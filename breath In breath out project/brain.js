// const contaner = document.querySelector(".container");
// const text = document.querySelector("#text");
// // console.log("Hello")
// const totalBreathCycle = 7500;
// const inhale = (totalBreathCycle/5)*2;
// const holdBreath = totalBreathCycle/5;


// function breathcontrol() {
//     text.innerText = "Breath In!";
//     contaner.className = "container grow";

//     setTimeout(() => {
//         text.innerHTML = "Hold Breath!";
//         // contaner.classList.remove("grow");
//         // contaner.classList.remove("grow")
//         setTimeout(() => {
//             text.innerHTML = "Breath Out!";
//             contaner.className = "container shrink";
//         }, holdBreath);
//     }, inhale);
// }

// setInterval(() => {
//     breathcontrol();
// }, totalBreathCycle);
























const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);