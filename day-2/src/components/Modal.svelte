<script>
  export let modalMessage;
  export let showModal;
  let isPromo = true;
</script>

<main>
  {#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self>
      <div class="modal">
        <p>{modalMessage}</p>
        <slot />
        <slot name="form-name" />
      </div>
    </div>
  {/if}
</main>

<style>
  .backdrop {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.75);
    position: fixed;
    z-index: 100;
    top: 0;
  }
  .modal {
    background: white;
    width: 25%;
    margin: 50px auto 0;
    padding: 20px;
    border-radius: 10px;
  }
  .modal p {
    text-align: center;
  }
</style>
