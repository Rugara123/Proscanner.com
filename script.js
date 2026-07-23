async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    await window.signInWithEmailAndPassword(
      window.firebaseAuth,
      email,
      password
    );

    window.location.href = "dashboard.html";
    // TODO: Redirect to your dashboard
    // Example:
    // window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}
