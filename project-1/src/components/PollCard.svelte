<script>
  import { createEventDispatcher } from "svelte";
  export let poll;

  $: totalVotes = poll.voteA + poll.voteB;
  $: percentA = Math.floor((100 / totalVotes) * poll.voteA);
  $: percentB = Math.floor((100 / totalVotes) * poll.voteB);

  const dispatch = createEventDispatcher();
  const handleVotes = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<div class="poll">
  <h3>{poll.question}</h3>
  <p>Total Votes: {totalVotes}</p>
  <div class="option" on:click={() => handleVotes("a", poll.id)}>
    <div class="percent percent-a" style="width: {percentA}%;"></div>
    <span>{poll.answer_a} ({poll.voteA})</span>
  </div>
  <div class="option" on:click={() => handleVotes("b", poll.id)}>
    <div class="percent percent-b" style="width: {percentB}%;"></div>
    <span>{poll.answer_b} ({poll.voteB})</span>
  </div>
</div>

<style>
  .poll {
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  h3 {
    margin: 0 auto;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .option {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .option:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
  .percent-a {
    border-left: 4px solid #d91b42;
    background-color: rgb(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid #45c496;
    background-color: rgb(69, 196, 150, 0.2);
  }
</style>
