function getCategories() {
  return JSON.parse(localStorage.getItem('categories')) || [];
}

function saveCategories(data) {
  localStorage.setItem('categories', JSON.stringify(data));
}

function getImages() {
  return JSON.parse(localStorage.getItem('images')) || [];
}

function saveImages(data) {
  localStorage.setItem('images', JSON.stringify(data));
}