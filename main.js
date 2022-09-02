function btn() {
  let image = document.getElementById('image');
  let images = ['images/01.png', 'images/02.png', 'images/03.png', 'images/04.png', 'images/05.png'];

  let random = Math.floor(Math.random() * 5);
  image.src = images[random];
}