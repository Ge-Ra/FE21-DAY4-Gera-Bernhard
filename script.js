function createElement() {
  let a = document.getElementsByName('firstname')[0].value;
  let b = document.getElementsByName('lastname')[0].value;
  let c = document.getElementsByName('age')[0].value;
  document.getElementById('result').innerHTML =
    '<div class="fname">' +
    a +
    '</div><div class="lname"> ' +
    b +
    '</div><div class="age">' +
    c +
    '</div><br>';
  //   document.getElementsByClassName("input")[0].value = '';
  event.preventDefault();
  if (a.length <= 5) {
    document.getElementsByClassName('fname')[0].style.color = 'red';
  } else {
    document.getElementsByClassName('fname')[0].style.color = 'green';
  }
}

document.getElementById('btn').addEventListener('click', createElement, false);
