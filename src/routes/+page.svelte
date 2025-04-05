<style>
    .container {
      background-color: #1e3a66;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .nav-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2.5rem;
    }
  
    .nav-links a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      font-size: 1.125rem;
    }
  
    .hero-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 2.5rem;
    }
  
    .hero-content {
      background-color: white;
      padding: 2.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 500px;
    }
  
    .hero-title {
      color: #1e3a66;
      font-size: 2rem;
      font-weight: bold;
    }
  
    .hero-buttons {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  
    .login-btn {
      background-color: #1e3a66;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: bold;
      transition: background 0.3s ease;
    }
  
    .login-btn:hover {
      background-color: #162b4e;
    }
  
    .register-btn {
      border: 2px solid #1e3a66;
      color: #1e3a66;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }
  
    .register-btn:hover {
      background-color: #1e3a66;
      color: white;
    }

    .logo {
    width: 400px;
    height: auto;
    }

  </style>
  
<script>
    // Define functions for button actions
    function handleLogin() {
    window.location.href = '/loginMember';
    }

     function handleRegister() {
    // You can keep or change this as needed
    alert('Register Clicked');
    }
  </script>
  
  <div class="bg-[#1e3a66] min-h-screen flex flex-col items-center">
    <!-- Navigation Bar -->
    <nav class="w-full flex justify-between items-center px-10 py-4 bg-transparent">
      <h1 class="text-white text-2xl font-bold">PHP Digital Member Portal</h1>
      <div class="space-x-6">
        <a href="#" class="text-white text-lg hover:underline">Home</a>
        <a href="#" class="text-white text-lg hover:underline">About</a>
      </div>
    </nav>
  
    <!-- Hero Section -->
    <section class="flex flex-col md:flex-row items-center justify-center mt-10 text-center md:text-left">
      <!-- Logo -->
      <img src="/images/digital member portal.png" alt="PHP Digital Member Portal Logo" class="logo" />
  
      <!-- Content -->
      <div class="bg-white rounded-lg shadow-lg p-10 md:ml-10 w-[500px]">
        <h2 class="text-[#1e3a66] text-3xl font-bold">
          Welcome to <br />
          Permanente Health Plan <br />
          <span class="text-[#1e3a66]">Digital Member Portal</span>
        </h2>
        <p class="text-gray-600 mt-4">
          We provide health solutions so we can achieve healthy, happy, and productive lives.
        </p>
  
        <!-- Buttons -->
        <div class="mt-6 flex gap-4 justify-start">
          <button
            class="bg-[#1e3a66] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#162b4e]"
            on:click={handleLogin}
          >
            Login
          </button>
          <button
            class="border-2 border-[#1e3a66] text-[#1e3a66] px-6 py-2 rounded-lg font-semibold hover:bg-[#1e3a66] hover:text-white"
            on:click={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  </div>
  