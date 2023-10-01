import './style.css'
const countUnit = document.querySelectorAll('.count-unit');
const daysElement =document.getElementById("days");
const hoursElement =document.getElementById("hours");
const minutesElement =document.getElementById("minutes");
const secondsElement =document.getElementById("seconds");
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "11/16/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        daysElement.innerText = Math.floor(distance / (day));
        hoursElement.innerText = Math.floor((distance % (day)) / (hour));
        minutesElement.innerText = Math.floor((distance % (hour)) / (minute));
        secondsElement.innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
        daysElement.innerText = '✨';
        hoursElement.innerText = '💍';
        minutesElement.innerText = '🥳';
        secondsElement.innerText = '🎉';
        countUnit.forEach((ele)=>{
          ele.style.display='none';
        })

        }
        //seconds
      }, 0)
  }());

