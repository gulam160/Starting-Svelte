<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { RestaurantsStore } from "./Store/Restaurants";
  import Pagination from "./components/Pagination.svelte";
  import Restaurants from "./components/Restaurants.svelte";
  import LoadingIndicator from "./components/LoadingIndicator.svelte";

  let isLoading = false;
  let page = 1;

  const getRestaurants = async (currentPage) => {
    try {
      isLoading = true;
      let res = await axios(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${currentPage}`
      );
      RestaurantsStore.update((prevData) => {
        return {
          ...prevData,
          totalPage: res.data.totalPages,
          restaurants: res.data.data,
        };
      });
      isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  onMount(() => {
    getRestaurants(page);
  });

  const handlePageChange = (e) => {
    page = e.detail;
    getRestaurants(page);
  };
</script>

<main>
  {#if isLoading}
    <LoadingIndicator />
  {:else}
    <h1>Restaurants Near You</h1>
    <Restaurants />
    <Pagination {page} on:pageChange={handlePageChange} />
  {/if}
</main>

<style>
  h1 {
    margin: 0 0 20px 0;
    text-align: center;
    color: #3a7bb9;
  }
  main {
    max-width: 1100px;
    margin: 20px auto;
  }
</style>
