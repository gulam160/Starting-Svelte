<script>
  import { createEventDispatcher } from "svelte";

  let name = "",
    email = "",
    age,
    // svelte = false,
    // nodejs = false,
    // react = false,
    skills = [],
    city = "";

  const dispatch = createEventDispatcher();
  function handleSumbit() {
    if (!(name && age)) {
      alert("Missing fields");
      return;
    }
    let data = { name, email, age, skills, city, id: Math.random() };
    dispatch("user", data);
  }
</script>

<div>
  <form on:submit|preventDefault={handleSumbit}>
    <input
      type="text"
      name="name"
      placeholder="Please enter name..."
      bind:value={name}
    />
    <input
      type="email"
      name="email"
      placeholder="Please enter email..."
      bind:value={email}
    />
    <input
      type="number"
      name="age"
      placeholder="Please enter age..."
      bind:value={age}
    />
    <div class="skill-checks">
      <label for="check">skills:</label>

      <!-- handing single by single input -->
      <!-- <input type="checkbox" bind:checked={react} /> React
      <input type="checkbox" bind:checked={nodejs} /> Node.js
      <input type="checkbox" bind:checked={svelte} /> Svelte -->

      <!-- handling Multiple inputs -->
      <input type="checkbox" bind:group={skills} value="React" /> React
      <input type="checkbox" bind:group={skills} value="Node.js" /> Node.js
      <input type="checkbox" bind:group={skills} value="Svelte " /> Svelte
    </div>

    <div class="select-option">
      <label for="select-option">city:</label>
      <select bind:value={city}>
        <option value="mumbai">Mumbai</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="benglore">Bengaluru</option>
      </select>
    </div>

    <button>Submit</button>
  </form>
</div>

<style>
  div {
    width: 30%;
  }
  form {
    width: fit-content;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 20px;
  }
  input {
    padding: 8px 2px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #0001;
  }
  button {
    padding: 8px 10px;
    color: white;
    background-color: violet;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .skill-checks,
  .select-option {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
