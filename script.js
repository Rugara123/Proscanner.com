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
<div style="background:#111827;min-height:100vh;color:white;font-family:Arial,sans-serif;">

<div style="background:#1f2937;padding:15px;display:flex;justify-content:space-between;align-items:center;">
<h2 style="color:#ff444f;">Proscanner Demo</h2>
<div>
Balance: <strong>$10,000.00</strong>
</div>
</div>

<div style="padding:20px;">

<div style="height:250px;background:#0b1220;border:1px solid #333;border-radius:10px;display:flex;justify-content:center;align-items:center;">
📈 Chart Area (coming next)
</div>

<div style="margin-top:20px;">

<label>Stake</label><br>
<input
type="number"
value="10"
style="width:100%;padding:12px;margin-top:5px;margin-bottom:15px;">

<label>Duration (seconds)</label><br>
<input
type="number"
value="5"
style="width:100%;padding:12px;margin-top:5px;">

</div>

<div style="display:flex;gap:10px;margin-top:20px;">

<button style="flex:1;background:#28a745;color:white;padding:15px;border:none;border-radius:8px;">
RISE
</button>

<button style="flex:1;background:#dc3545;color:white;padding:15px;border:none;border-radius:8px;">
FALL
</button>

</div>

</div>

</div>
`;
