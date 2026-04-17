const BASE_URL = "http://localhost:3000/api";

async function loadDashboard() {
  const catRes = await fetch(`${BASE_URL}/category`);
  const imgRes = await fetch(`${BASE_URL}/image`);

  const categories = await catRes.json();
  const images = await imgRes.json();

  document.getElementById("catCount").innerText = categories.length;
  document.getElementById("imgCount").innerText = images.length;
}

loadDashboard();