<script>
  import IoMdHeartEmpty from "svelte-icons/io/IoMdHeartEmpty.svelte";
  import IoIosStar from "svelte-icons/io/IoIosStar.svelte";
  export let data;
</script>

<div class="card">
  <div class="img-container">
    <img src={data.image} alt="" />
    <p class="heart">
      <IoMdHeartEmpty />
    </p>
  </div>
  <div class="about">
    <div class="name-rating">
      <p class="name">{data.name}</p>
      <span>
        <p class="icon">
          <IoIosStar />
        </p>
        <p>{data.rating}</p>
      </span>
    </div>
    <p class="type">{data.type}</p>
    <p class="like">Liked by {data.number_of_votes} peoples</p>
    <p class="price">₹{data.price_starts_from} night</p>
  </div>
</div>

<style>
  .card {
    padding: 10px;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 220px;
    border-radius: 5px;
    margin: 0 auto;
  }
  .img-container {
    width: fit-content;
    position: relative;
  }
  .heart {
    width: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .img-container > img {
    border-radius: 5px 5px 0 0;
  }
  .about {
    margin-top: 10px;
  }
  .name-rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    font-weight: 600;
    font-size: 18px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .icon {
    width: 14px;
  }
  .type::first-letter {
    text-transform: capitalize;
  }
  .type,
  .like,
  .price {
    color: #717171;
    margin-top: 4px;
  }
</style>
