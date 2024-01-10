<script>
  import { RestaurantsStore } from "../Store/Restaurants";
  import { onMount, createEventDispatcher } from "svelte";

  export let page;
  let totalButtons = [];

  onMount(() => {
    RestaurantsStore.subscribe((data) => {
      totalButtons = new Array(data.totalPage).fill(0);
    });
  });

  const dispatch = createEventDispatcher();
  const handlePageChange = (page) => {
    dispatch("pageChange", page);
  };
</script>

<div>
  {#each totalButtons as _, index (index)}
    <button
      class:active={index + 1 === page}
      on:click={() => handlePageChange(index + 1)}>{index + 1}</button
    >
  {/each}
</div>

<style>
  div {
    margin: 30px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  button {
    padding: 5px 8px;
    cursor: pointer;
    background-color: #3a7bb9;
    color: white;
    border-radius: 5px;
    border: none;
  }
  .active {
    background-color: gold;
  }
</style>
