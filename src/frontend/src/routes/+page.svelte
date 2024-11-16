<script lang="ts">
  import { onMount } from "svelte";
  import type { Component } from "svelte";
  import { writable } from "svelte/store";
  import type { Project } from "$lib/types/projects";

  import { storeManager } from "$lib/managers/store-manager";
  
  import Layout from './Layout.svelte';
  import Header from "$lib/shared/Header.svelte";

  import { getStatusString } from "$lib/utils/helpers";
  import LocalSpinner from "$lib/components/shared/local-spinner.svelte";
  import WidgetSpinner from "$lib/components/shared/widget-spinner.svelte";
  let isLoading = true;
  
  export let isMenuOpen: boolean;
  
  onMount(async () => {
    try{
      await storeManager.syncStores();
    } catch(error){
      console.error("Error loading homepage");
    } finally {
      isLoading = false;
    }
  });
  
</script>
<Layout bind:isMenuOpen>
  {#if isLoading}
    <LocalSpinner />
  {:else}
    <p>OpenBeats</p>
  {/if}
</Layout>
