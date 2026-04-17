let categories = JSON.parse(localStorage.getItem('categories')) || [];

function addCategory() {
  let input = document.getElementById('catInput');
  categories.push(input.value);

  localStorage.setItem('categories', JSON.stringify(categories));
  input.value = '';
  load();
}

function load() {
  let list = document.getElementById('catList');
  list.innerHTML = '';

  categories.forEach((c, i) => {
    list.innerHTML += `<li>${c} <button onclick="del(${i})">Delete</button></li>`;
  });
}

function del(i) {
  categories.splice(i, 1);
  localStorage.setItem('categories', JSON.stringify(categories));
  load();
}

load();

const BASE_URL = "http://localhost:3000/api";

// ADD CATEGORY
async function addCategory() {
  let name = document.getElementById("catName").value;
  let image = document.getElementById("catImage").value;

  const res = await fetch(`${BASE_URL}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, image })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Category Added");
  } else {
    alert("Error");
  }
}