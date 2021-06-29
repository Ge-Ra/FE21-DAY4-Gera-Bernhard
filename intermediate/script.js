// https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878

// https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png

function removeItem() {
  this.style.opacity = '0';
  this.style.transition = '1s';
}

var santa = document.getElementsByClassName('santa');

for (let i = 0; i < santa.length; i++) {
  santa[i].addEventListener('click', removeItem);
}
