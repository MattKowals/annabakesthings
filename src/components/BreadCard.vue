<template>
  <div class="card">
    <h2 class="bread-name"> {{ bread.name }} </h2>
    <h4 class="net-weight"> {{bread.netWeight}} </h4>
    <img :src="getImage" alt="image" class="bread-img"> 
    <h3 class="bread-price"> {{ bread.price }} </h3>
    <h4 class="bread-ingredients"> {{bread.ingredients}} </h4>
  </div>
</template>

<script>
export default {
    props: ['bread'],
    computed: {
        getImage() {
            return new URL (`../assets/${this.bread.name}.jpg`, import.meta.url)
        }
    }
}
</script>

<style>

.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    margin: 20px;
    background-color: wheat;
    text-align: center;
    cursor: pointer;
}

.card .bread-name {
    font-size: 1.5rem;
    margin: 2px;
}

.card .bread-price {
    font-size: 1rem;
}

.card .bread-img {
    width: 80%;
    border: 1px solid black;

}

</style>