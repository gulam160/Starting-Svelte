<script>
  import { RestaurantsStore } from "../Store/Restaurants";
  import RestaurantCard from "./RestaurantCard.svelte";

  let restaurantData = [];

  RestaurantsStore.subscribe((data) => {
    const { restaurants } = data;
    restaurantData = restaurants;
  });
</script>

<section class="restaurant-container">
  {#each restaurantData as restaurant (restaurant.id)}
    <RestaurantCard data={restaurantData[0]} />
  {/each}
</section>

<style>
  .restaurant-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 3rem;
  }
</style>
