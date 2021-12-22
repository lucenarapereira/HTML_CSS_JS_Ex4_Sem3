function Hour(){
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  let clock = `${currentHour}:${currentMinute}:${currentSecond}`;
  let display = document.getElementById('hour');

  display.innerText = `${clock}`;
}; 