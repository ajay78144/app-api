const BASE_URL = "http://localhost:3000/api";

// LOAD CATEGORY DROPDOWN
async function loadCategories() {
  const res = await fetch(`${BASE_URL}/category`);
  const data = await res.json();

  let select = document.getElementById("categorySelect");

  data.forEach(cat => {
    let option = document.createElement("option");
    option.value = cat._id;
    option.text = cat.name;
    select.appendChild(option);
  });
}

loadCategories();

// ADD IMAGE
async function addImage() {
  let imageUrl = document.getElementById("imgUrl").value;
  let categoryId = document.getElementById("categorySelect").value;

  const res = await fetch(`${BASE_URL}/image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ imageUrl, categoryId })
  });

  if (res.ok) {
    alert("Image Added");
  } else {
    alert("Error");
  }
}