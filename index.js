const handleClick = () => {
  const dayInputValue = parseInt(document.getElementById("day-input").value);
  const monhInputValue = parseInt(document.getElementById("month-input").value);
  const yearInputValue = parseInt(document.getElementById("year-input").value);

  console.log(dayInputValue, monhInputValue, yearInputValue);
  const yearAnswer = document.getElementById("year-number");
  const monthAnswer = document.getElementById("month-number");
  const dayAnswer = document.getElementById("day-number");

  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();
  const thisDay = new Date().getDate();
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const daysInLastMonth = new Date(
    lastMonth.getFullYear(),
    lastMonth.getMonth() + 1,
    0
  ).getDate();

  if (dayInputValue || monhInputValue || yearInputValue) {
    yearAnswer.innerHTML = thisYear - yearInputValue;
    //

    if (monhInputValue === thisMonth) {
    }
    //
    monthAnswer.innerHTML = thisMonth - monhInputValue;
    if (yearInputValue <= thisYear) {
      // const dayDifference =  thisDay+ (dayInputValue - daysInLastMonth);
      // dayAnswer.innerHTML = dayDifference;

      //  tutej

      if (thisDay >= dayInputValue) {
        const dayDifference = thisDay - dayInputValue;
        dayAnswer.innerHTML = dayDifference;
      } else {
        const dayDifference = thisDay + (daysInLastMonth - dayInputValue);
        dayAnswer.innerHTML = dayDifference;
      }
    }
  }
};

const day = document.getElementById("day-input");
const month = document.getElementById("month-input");
const year = document.getElementById("year-input");

function showMessage(element, maxValue, minValue = 1) {
  element.addEventListener("change", () => {
    const message = element.parentElement.querySelector(".error-message");

    if (message) {
      if (element.value > maxValue || element.value < minValue) {
        message.classList.add("error-message--visible");
      } else {
        message.classList.remove("error-message--visible");
      }
    }
  });
}

window.addEventListener("load", () => {
  showMessage(day, 31);
  showMessage(month, 12);
  showMessage(year, 100000);
});
