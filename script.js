function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  document.body.innerHTML = `
  <div style="background:#111827;min-height:100vh;color:white;font-family:Arial,sans-serif;padding:20px;">

    <div style="display:flex;justify-content:space-between;align-items:center;padding:15px;background:#1f2937;border-radius:10px;">
      <h2 style="margin:0;color:#ff444f;">Proscanner Demo</h2>
      <strong>$10,000.00</strong>
    </div>

    <div style="margin-top:20px;height:250px;background:#0b1220;border:1px solid #333;border-radius:10px;display:flex;align-items:center;justify-content:center;">
      📈 Chart Area
    </div>

    <div style="margin-top:20px;">
      <label>Stake</label>
      <input type="number" value="10" style="width:100%;padding:10px;margin:8px 0 15px;">

      <label>Duration (seconds)</label>
      <input type="number" value="5" style="width:100%;padding:10px;margin:8px 0 15px;">

      <div style="display:flex;gap:10px;">
        <button style="flex:1;background:green;color:white;padding:15px;border:none;border-radius:8px;">RISE</button>
        <button style="flex:1;background:red;color:white;padding:15px;border:none;border-radius:8px;">FALL</button>
      </div>
    </div>

  </div>
  `;
}
