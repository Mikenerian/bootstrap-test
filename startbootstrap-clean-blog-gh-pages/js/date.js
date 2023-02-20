
let selectedDate = document.getElementById('dateInput');
let dateList = document.getElementById('dateList');
let selectButton = document.getElementById('dateAddButton');
const weekJpn = ['日', '月', '火', '水', '木', '金', '土'];

function addList() {
  // dateList.value = dateList.value + selectedDate.value;
  if(selectedDate.value!=='') {
    let dateValue = new Date(selectedDate.value);
    let year = dateValue.getFullYear();
    let month = dateValue.getMonth() + 1;
    let day = dateValue.getDate();
    let weekDay = weekJpn[dateValue.getDay()];
    let hours = dateValue.getHours();
    let minutes = ('0' + dateValue.getMinutes()).slice(-2);
    let formatDate = year + '/' + month + '/' + day + '(' + weekDay + ')' + hours + ':' + minutes;

    // dateList.value = dateList.value + '\n' + selectedDate.value;
    dateList.value = dateList.value + '\n' + formatDate;
  }
}
selectButton.addEventListener('click', addList);