const BASE_URL = "http://localhost:3000/api";

async function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Login Success");
    window.location.href = "dashboard.html";
  } else {
    alert(data.message || "Login Failed");
  }
}