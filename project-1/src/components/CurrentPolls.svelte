<script>
  import PollCard from "./PollCard.svelte";

  export let polls = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollCard {poll} on:vote />
  {/each}
</div>

<style>
  div {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
</style>
