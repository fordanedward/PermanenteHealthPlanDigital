<script>
  let firstName = '';
  let lastName = '';
  let email = '';
  let phone = '';
  let password = '';
  let confirmPassword = '';
  let error = '';

  function handleRegister() {
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      error = 'All fields are required.';
      return;
    }

    if (password !== confirmPassword) {
      error = 'Passwords do not match.';
      return;
    }

    alert(`Welcome, ${firstName}!`);
  }

  function goBack() {
    window.history.back();
  }
</script>

<style>
  .page-container {
    background-color: #003366;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
  }

  .content {
    display: flex;
    background-color: transparent;
    align-items: center;
    gap: 2rem;
  }

  .logo-container {
    flex-shrink: 0;
  }

  .logo {
    width: 390px;
    height: auto;
  }

  .register-box {
    background-color: white;
    padding: 2.5rem;
    border-radius: 1.5rem;
    width: 400px;
    text-align: center;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }

  input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #003366;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .error {
    color: red;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .login-link {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .login-link a {
    color: #003366;
    font-weight: bold;
    text-decoration: none;
  }

  .back-button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: white;
    color: #003366;
    border: 2px solid #003366;
    padding: 0.4rem 0.75rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .back-button:hover {
    background-color: #003366;
    color: white;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .logo {
      width: 150px;
    }

    .register-box {
      width: 100%;
    }
  }
</style>

<div class="page-container">
  <!-- Back Button -->
  <a href="/" class="back-button">← Back</a>

  <div class="content">
    <!-- Logo -->
    <div class="logo-container">
      <img src="/images/digital member portal.png" alt="PHP Logo" class="logo" />
    </div>

    <!-- Registration Form -->
    <div class="register-box">
      <h2 style="font-size: 1.3rem;"><b>Register to become a Member</b></h2>

      {#if error}
        <div class="error">{error}</div>
      {/if}

      <input type="text" placeholder="First Name*" bind:value={firstName} />
      <input type="text" placeholder="Last Name*" bind:value={lastName} />
      <input type="email" placeholder="Email*" bind:value={email} />
      <input type="text" placeholder="Phone Number*" bind:value={phone} />
      <input type="password" placeholder="Password*" bind:value={password} />
      <input type="password" placeholder="Confirm Password*" bind:value={confirmPassword} />

      <button on:click={handleRegister}>Register</button>

      <div class="login-link">
        Already a member? <a href="/loginMember">Log in</a>
      </div>
    </div>
  </div>
</div>
