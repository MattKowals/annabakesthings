<template>

  <div class="bread-container">

    <div class="standard">
      <h1>Breads</h1>
      <div class="standard-container">
        <bread-card v-for="bread in $store.state.standardBreads" v-bind:bread="bread" v-bind:key="bread.name" />
      </div>
    </div>


    <div class="specialty">
      <h1>Specialty and Seasonal Breads</h1>
      <div class="specialty-container">
        <bread-card v-for="bread in $store.state.specialtyBreads" v-bind:bread="bread" v-bind:key="bread.name" />
        <standardbread-list />
      </div>
    </div>


    <div class="baked-goods">
      <h1>Baked Goods</h1>
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
}

.baked-goods {
  grid-area: baked-goods;
}

.standard-container {
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