<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import Footer from "$lib/shared/Footer.svelte";
  import Header from "$lib/shared/Header.svelte";

  import { initAuthWorker } from "$lib/services/worker-auth-service";
  import { authStore, type AuthStoreData } from "$lib/stores/auth-store";
  import { storeManager } from "$lib/managers/store-manager.js";

  import LocalSpinner from "$lib/components/shared/local-spinner.svelte";
  import "../app.css";
  
  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;

  const syncAuthStore = async () => {
    if (!browser) return;
    try {
      await authStore.sync();
    } catch (err) {
      console.error("Error syncing auth store:", err);
    }
  };

  const init = async () => {
    await syncAuthStore();
    await storeManager.syncStores();
  };

  onMount(async () => {
    if (browser) {
      worker = await initAuthWorker();
    }
  });

  $: worker, $authStore, worker?.syncAuthIdle($authStore);
  $: (() => {
    if (browser && $authStore) {
      const spinner = document.querySelector("body > #app-spinner");
      spinner?.remove();
    }
  })();

</script>

<svelte:window on:storage={syncAuthStore} />

{#await init()}
  <div in:fade>
    <LocalSpinner />
  </div>
{:then _}
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
{/await}
