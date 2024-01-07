<script>
  import Modal from "./components/Modal.svelte";

  let num = 25;
  let modalMessage = "Hey Freinds, I am Modal!";
  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<main>
  {#if num > 25}
    <h1>Number is greater than 25</h1>
  {:else if num < 25}
    <h1>Number is less than 25</h1>
  {:else if num === 25}
    <h1>Number is equal to 5</h1>
  {:else}
    <h1>Not Applicable</h1>
  {/if}

  <Modal {modalMessage} {showModal} on:click={toggleModal}>
    <form>
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="tel" placeholder="Telephone" />
      <input type="submit" value="Sumbit" />
    </form>

    <!-- specific slots -->
    <div slot="form-name">
      <p>This is registration form</p>
    </div>
  </Modal>
  <div class="open-modal">
    <button on:click={toggleModal}>Open Modal</button>
  </div>
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  h1 {
    text-align: center;
    padding: 5px;
  }
  .open-modal {
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;
  }
  .open-modal button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background-color: blueviolet;
    color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 10px auto;
    gap: 10px;
  }
  input {
    padding: 5px 2px;
  }
</style>
