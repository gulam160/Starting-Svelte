<script>
  import AddPeopleForm from "./components/AddPeopleForm.svelte";

  let users = [];

  const handleUsers = (e) => {
    const user = e.detail;
    users = [...users, user];
    console.log(users);
  };
</script>

<main>
  <AddPeopleForm on:user={handleUsers} />
  {#each users as user, index (index + 1)}
    <p class="h1">{index + 1}. {user.name}</p>
  {:else}
    <p>No user found!</p>
  {/each}
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-top: 20px;
  }
</style>
