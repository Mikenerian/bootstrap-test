
let selectedDate = document.getElementById('dateInput');
let dateList = document.getElementById('dateList');
let selectButton = document.getElementById('dateAddButton');
const weekJpn = ['日', '月', '火', '水', '木', '金', '土'];

function addList() {
  console.log(selectedDate.value);
  if(selectedDate.value != '') {
    let dateValue = new Date(selectedDate.value);
    let year = dateValue.getFullYear();
    let month = dateValue.getMonth() + 1;
    let day = dateValue.getDate();
    let weekDay = weekJpn[dateValue.getDay()];
    let hours = dateValue.getHours();
    let minutes = ('0' + dateValue.getMinutes()).slice(-2);
    let formatDate = year + '/' + month + '/' + day + '(' + weekDay + ')' + hours + ':' + minutes;
    dateList.value = dateList.value + '\n' + formatDate;
  } else {
    console.log("日付を入力してください")
  }
}
selectButton.addEventListener('click', addList);