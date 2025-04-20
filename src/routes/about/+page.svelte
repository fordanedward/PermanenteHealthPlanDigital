<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="bg-[#1e3a66] min-h-screen flex flex-col items-center">
    <!-- Navigation Bar -->
    <nav class="w-full flex justify-between items-center px-10 py-4 bg-transparent">
      <h1 class="text-white text-2xl font-bold">PHP Digital Member Portal</h1>
      <div class="space-x-6">
        <a href="/" class="text-white text-lg hover:underline">Home</a>
        <a href="/about" class="text-white text-lg hover:underline">About</a>
      </div>
    </nav>
  
    <!-- About Section -->
    <section class="flex flex-col md:flex-row items-center justify-center mt-10 px-6 text-white md:text-left">
      <!-- Image -->
      <img
        src="/images/php facility.png"
        alt="PHP Location Image"
        class="w-[650px] h-auto rounded-full object-cover mb-8 md:mb-0 md:mr-10 border-4 border-white"
      />
  
      <!-- Text Content -->
      <div class="bg-white text-[#1e3a66] rounded-lg shadow-lg p-8 max-w-xl">
        <h2 class="text-2xl font-bold mb-4">About PHP</h2>
        <p class="mb-4 text-sm leading-relaxed">
          Permanente Health Plan was founded in 2019 with a mission to provide an affordable, trusted outpatient, labs,
          pharmacy, diagnostic imaging, dental, optometry, mental health and urgent care membership for the residents of
          the Philippines. Our vision is to build a future of health and wellness to all residents of the Philippines
          through preventive care.
          <br /><br />
          PHP was founded by Filipinos for Filipinos. Our contracted physician and medical health providers are all local
          in Olongapo. We also telemedicine option to our urgent care members.
        </p>
        <p class="mb-2">
          For a detailed list of our services and contracted providers, please visit our website at
          <a href="https://www.permanentehealthplan.org" class="font-bold underline text-[#1e3a66]" target="_blank">
            www.permanentehealthplan.org
          </a>
        </p>
  
        <!-- Contact Info -->
        <div class="mt-4 text-sm">
          <p class="flex items-center gap-2">
            📞 0968 856 1807
          </p>
          <p class="flex items-center gap-2">
            📍 Lot 19–23, Blk 7, Mayumi St, Sta Rita, Olongapo City
          </p>
        </div>
      </div>
    </section>
  </div>