<script>
  import CurrentPolls from "./components/CurrentPolls.svelte";
  import CreateNewPoll from "./components/CrateNewPolls.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tabs from "./components/Tabs.svelte";

  let tabs = ["Current Polls", "Create New Polls"];
  let activeTabs = tabs[0];

  const handleTabChang = (e) => {
    activeTabs = e.detail;
  };

  let polls = [
    {
      id: 1,
      question: "JavaScript or Python?",
      answer_a: "JavaScript",
      answer_b: "Python",
      voteA: 9,
      voteB: 15,
    },
  ];

  const handlePollData = (e) => {
    let poll = e.detail;
    polls = [poll, ...polls];
    activeTabs = tabs[0];
  };

  const handleVote = (e) => {
    const { option, id } = e.detail;

    let copiedPolls = [...polls];
    let voted = copiedPolls.find((el) => el.id === id);
    if (option === "a") {
      voted.voteA++;
    }
    if (option === "b") {
      voted.voteB++;
    }

    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {tabs} {activeTabs} on:tab={handleTabChang} />

  {#if activeTabs === "Current Polls"}
    <CurrentPolls {polls} on:vote={handleVote} />
  {:else}
    <CreateNewPoll on:addPoll={handlePollData} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
