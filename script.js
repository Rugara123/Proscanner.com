function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please enter your email and password.");
    return;
  }

  alert("Login successful!");

  // This is temporary.
  // Later we'll replace this with the trading dashboard.
  document.body.innerHTML = `
    <div style="font-family:Arial,sans-serif;background:#0b1220;color:white;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;">
      <h1 style="color:#00e676;">Welcome to Proscanner</h1>
      <p>Dashboard coming in the next step...</p>
    </div>
  `;
}
