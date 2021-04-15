var sec = +prompt('enter seconds');
// var min = sec/60;
// var hour = min/60;
// var day = hour/24;
// console.log(
//   sec + " секунд " + " - " + min + " минут " + hour + " часов " + day + " суток "
// );

console.log(
  sec + "-секунд " + " - " + (sec/60) + "-минут " + (sec/3600) + "-часов " + (sec/86400) + "-суток ");