let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function Time() {
   let date = new Date();

   let hr = date.getHours();
   let mn = date.getMinutes();
   let se = date.getSeconds();

   let hrRotate = 30 * hr + mn / 2;
   let minRotate = 6 * mn;
   let secRotate = 6 * se;

   hour.style.transform = `rotate(${hrRotate}deg)`
   min.style.transform = `rotate(${minRotate}deg)`
   sec.style.transform = `rotate(${secRotate}deg)`
// console.log(sec)
}
setInterval(Time, 1000);

