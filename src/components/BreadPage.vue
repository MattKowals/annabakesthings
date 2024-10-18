<template>

  <div class="bread-container">

    <div class="otis-loaf">
      <h1>The Otis Loaf</h1>
      <h3>Get it before he does!</h3>
      <div class="otis-container">
        <bread-card v-for="bread in $store.state.otisBread" v-bind:bread="bread" v-bind:key="bread.name" />
      </div>
    </div>

    <div class="standard">
      <h1>The Regs</h1>
      <h3>Year Round Favorites</h3>
      <div class="standard-container">
        <bread-card v-for="bread in $store.state.standardBreads" v-bind:bread="bread" v-bind:key="bread.name" />
      </div>
    </div>


    <div class="specialty">
      <h1>The Rotation</h1>
      <h3>Specialty and Seasonal Breads</h3>
      <div class="specialty-container">
        <bread-card v-for="bread in $store.state.specialtyBreads" v-bind:bread="bread" v-bind:key="bread.name" />
        <standardbread-list />
      </div>
    </div>


    <div class="baked-goods">
      <h1>Small Bites</h1>
      <h3>Smaller in size, equal in deliciousness</h3>
      <div class="bakedgoods-container">
        <bread-card v-for="bread in $store.state.bakedGoods" v-bind:bread="bread" v-bind:key="bread.name" />
      </div>
    </div>


  </div>
</template>

<script>
import BreadCard from '../components/BreadCard.vue'

export default {
  components: {
    BreadCard,
  },

}
</script>

<style>

.bread-container {
  display: grid;
  /* grid-template-rows: 1fr 1fr 1fr; */
  grid-template-areas: 
      "otis-loaf"
      "standard"
      "specialty"
      "baked-goods";
}

.standard {
  grid-area: standard;
  padding: 8px;
}

.specialty {
  grid-area: specialty;
  padding: 8px;
}

.baked-goods {
  grid-area: baked-goods;
  padding: 8px;
}

.otis-loaf {
  grid-area: otis-loaf;
  padding: 8px;
}

.standard-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.otis-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.specialty-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.bakedgoods-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

</style>