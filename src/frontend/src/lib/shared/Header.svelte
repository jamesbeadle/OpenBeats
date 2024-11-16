<script lang="ts">
  import DotsIcon from '$lib/icons/DotsIcon.svelte';
  import CloseIcon from '$lib/icons/CloseIcon.svelte';
  import ArrowIcon from '$lib/icons/ArrowIcon.svelte';
  import { authStore } from '$lib/stores/auth-store';
  import { onMount } from 'svelte';
  export let isMenuOpen = false;

  let isLoggedIn = false;
  
  onMount(async () => {
    try {
      authStore.subscribe((store) => {
        isLoggedIn = store.identity !== null && store.identity !== undefined;
      });
    } catch (error) {
      console.error("Error fetching homepage data:", error);
    } finally {
    }
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="py-4 bg-BrandGray lg:py-2 px-4">
  <div class="flex items-center justify-between w-full lg:max-w-1/2">
    <a href="/">
      <div class="flex items-center space-x-2">
        <img src="logo.png" class="h-5" alt="OpenBeats" />
        <span>OpenBeats</span>      
      </div>
    </a>

    <nav class="hidden space-x-4 sm:flex lg:mr-2">
      <a href="/" class="hover:underline">Coming Soon</a>
      {#if isLoggedIn}
        <a href="account" class="hover:underline">Account</a>
      {/if}
    </nav>

    <button
      class="sm:hidden"
      aria-label="Menu"
      on:click={toggleMenu}
    >
      <DotsIcon className="w-5" />
    </button>
  </div>
</header>

{#if isMenuOpen}
  <div class="mobile-menu">
    <div class="mobile-menu-header">
      <a href="/" class="flex items-center space-x-2">
        <img src="logo.png" class="h-5" alt="OpenBeats" />
        <span class="header-text">OpenBeats</span> 
      </a>
      <button 
        on:click={toggleMenu}
        aria-label="Close menu">
        <CloseIcon className="w-5 text-white" />
      </button>
    </div>
    <div class="mobile-menu-links">
      <div class="horizontal-divider"></div>
      <div class="mobile-menu-item">
        <a href="/" class="mobile-nav-link" on:click={toggleMenu}>Coming Soon</a>
        <a href="/" on:click={toggleMenu}>
          <ArrowIcon className="w-7 h-7" />
        </a>
      </div>
      <div class="horizontal-divider"></div>
    </div>
  </div>
{/if}
