<script>
  import { createEventDispatcher } from "svelte";

  export let tabs;
  export let activeTabs;

  const dispatch = createEventDispatcher();
  const switchTab = (clickedTab) => {
    dispatch("tab", clickedTab);
  };
</script>

<section class="tabs">
  <ul>
    {#each tabs as tabItem}
      <li
        class:active={tabItem === activeTabs}
        on:click={() => switchTab(tabItem)}
      >
        {tabItem}
      </li>
    {/each}
  </ul>
</section>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
