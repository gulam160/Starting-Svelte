<script>
  let name = "";

  let data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
  ];

  const handleDelete = (id) => {
    let newData = data.filter((product) => {
      return product.id !== id;
    });
    data = newData;
  };
</script>

<main>
  <h1 class="header">Shop</h1>
  <div class="card-container">
    {#each data as element (element.id)}
      <div class="card">
        <img src={element.image} alt={element.id} width="100" />
        <p>{element.title}</p>
        <button on:click={() => handleDelete(element.id)}>Delete</button>
      </div>
    {:else}
      <p class="no-data-msg">Oops, Items are sold out</p>
    {/each}
  </div>

  <!-- data binding in user input -->
  <div class="user-input">
    <p>Hello! My name is {name}</p>
    <input type="text" placeholder="enter name" bind:value={name} />
  </div>
</main>

<style>
  .header {
    text-align: center;
    color: red;
    background: #0001;
    padding: 4px;
  }
  .card-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 20px;
  }
  .card {
    border: 1px solid black;
    border-radius: 10px;
    width: 300px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
  .card > img {
    width: 100%;
    height: 300px;
  }
  .card > p {
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
  }
  .card > button {
    padding: 4px;
    margin-top: 6px;
    background: aquamarine;
    color: black;
    cursor: pointer;
    border: none;
    margin: 10px 0;
  }
  .no-data-msg {
    text-align: center;
    width: 100%;
  }
  .user-input {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 5px;
    margin-top: 10px;
  }
</style>
