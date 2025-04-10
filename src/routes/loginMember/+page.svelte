<script>
    let memberNumber = '';
    let password = '';
    let error = '';
  
    function handleLogin() {
      if (!memberNumber || !password) {
        error = 'Please fill in both fields.';
        return;
      }
      // You can handle actual authentication here
      alert(`Logging in as member: ${memberNumber}`);
    }
  </script>
  
  <style>
    .login-container {
      background-color: #003366;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .login-box {
      background-color: white;
      padding: 2rem;
      border-radius: 1rem;
      width: 350px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
  
    .logo {
      width: 100px;
      margin: 0 auto 1rem;
    }
  
    input {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
    }
  
    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #003366;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  
    .register {
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  
    .register a {
      color: #003366;
      text-decoration: none;
      font-weight: bold;
    }
  
    .error {
      color: red;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }

    .logo {
        width: 200px;
        height: auto;
    }
  </style>
  
  <div class="login-container">
    <div class="login-box">
      <img src="/images/digital member portal.png" alt="PHP Logo" class="logo" />
      <b><h2 style ="font-size: 1.3rem;">Welcome Member!</h2></b>
  
      {#if error}
        <div class="error">{error}</div>
      {/if}
  
      <input
        type="text"
        placeholder="Member Number"
        bind:value={memberNumber}
      />
      <input
        type="password"
        placeholder="Password"
        bind:value={password}
      />
      <button on:click={handleLogin}>Login</button>
  
      <div class="register">
        Don’t have a member account? <a href="/registerMember">Register</a>
      </div>
    </div>
  </div>
  