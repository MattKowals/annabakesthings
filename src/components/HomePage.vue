<template>
  <div class="home">

    <div class="welcome">
      <h1>Welcome to AnnaBakesThings!</h1>
      <p class="description">
        A cottage bakery focusing on breads
      </p>
      <p>
        (ADD SHOP BIO STUFF)
      </p>

    </div>

      <!-- Add Carousel to Home Page -->
    <carousel-box :slides="slides"></carousel-box>
      
    
    <div class="market-schedule">
      <h1>Come visit me at the German Village Farmers Market this summer!</h1>

      <p>2024 Schedule</p>
      <ul style="list-style-type:none;">
        <li>Date</li>
        <li>Date</li> 
        <li>Date</li> 
        <li>Date</li>   
      </ul>
    </div>

    <div class="contact">
      <h1>Personal orders are coming soon!</h1>
      <p>I do personal orders when not in farmers market season. The pick up schedule is below</p>
      <ul style="list-style-type:none;">
        <li>Date</li>
        <li>Date</li> 
        <li>Date</li> 
        <li>Date</li>   
      </ul>
      <p>To discuss placing an order, contact AnnaBakesThings</p>
      <p>(add in email button and security)</p>
      <p class="contact-note" >** Note - Send an email to discuss orders. Orders are due the Thursday prior to pickup days
        and large orders may need extra time to prpare.
      </p>
    </div>

  </div>

</template>

<script>
  import CarouselBox from './CarouselBox.vue'

export default {
  components: {
    CarouselBox
  },
  data: () => ({
    slides: [
        "src/assets/otis_stickers.jpg",
        "src/assets/9P5A6953.jpg",
        "src/assets/bread1.jpg",
        "src/assets/9P5A6966.jpg",
        "src/assets/9P5A6969.jpg",
        "src/assets/otis_original.jpg",
        "src/assets/9P5A7022.jpg"
    ]
})
}
</script>

<style scoped>

.home {
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/black_cutting_board.avif");
  background-position: right top;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  display: grid;
  font-weight: bold;
  color: cornsilk;
  /* grid-template-rows:  0.25fr 1fr 1fr 1fr ; */
  grid-template-areas: 
      "welcome"
      "carousel"
      "market-schedule"
      "contact";
}

.welcome {
  grid-area: welcome;
}

.carousel-box {
  grid-area: carousel;
  margin-top: 8px;
  margin-bottom: 8px;
}

.market-schedule {
  grid-area: market-schedule;
  margin-top: 12px;
  margin-bottom: 12px;
}

.contact {
  grid-area: contact;
    margin-top: 12px;
  margin-bottom: 12px;
}

.contact-note {
  margin-top: 20px;
    margin-top: 12px;
  margin-bottom: 12px;
}

h1 {
  text-indent: 20px;
  margin-top: 20px;
}

p {
  text-indent: 20px;
  margin-top: 10px;
}

.description {
  margin-top: 20px;
}

</style>