<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse>
  <slot />
</button>

<style>
  button {
    border: 0;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.2);
  }
  .primary {
    background-color: #d91b42;
    color: white;
  }
  .secondary {
    background-color: #45c496;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: #d91b42;
    background-color: white;
    border: 2px solid #d91b42;
  }
  .secondary.inverse {
    color: #45c496;
    background-color: white;
    border: 2px solid #45c496;
  }
</style>
