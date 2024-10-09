<template>
  <div class="list-container">
    <bread-card v-for="bread in $store.state.standardBreads" v-bind:bread="bread" v-bind:key="bread.name" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>