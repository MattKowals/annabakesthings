<template>
  <div class="about">
    
    <div class="about-anna">
      <h1>About Anna</h1>
      <p>Anna graduated from CCAD in Art and developed a love of baking.</p>
      <p>Anna learned to bake by ........... </p>
      <p>In 2024 Anna studied at xyz in San Francisco at the ABC Institute for Baking Deliciousness</p>
      <p class="bold" >Anna's favorite cookbooks!</p>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
      </ul>
    </div>
    
  
    <div class="anna-img">
      <img src="../assets/anna_bread_sanfran_2.jpg" alt="Anna with bread" width="580" height="630" />
    </div>
  
    <div class="otis">
      <h1>Otis</h1>
      <h2>(The original white loaf)</h2>
      <p>What a cute boy!!!</p>
      <img src="../assets/otis_original.jpg" alt="Otis the dog" width="400" height="300">
    </div>

    <div class="review-text">
      <h2>Interview with Anna</h2>
      <h3>Operation Melt, a life and wellness blog, interviewed Anna under their "Interview with a Goal-Crusher" series. This interview highlights the start of AnnaBakesThings and 
        some of the challenges she has overcome.
      </h3>
      <h3>Read more <a href="https://www.operationmelt.com/2024/01/07/annas-story-of-launching-a-side-hustle-to-make-some-dough-interview/">here</a>! </h3>
    </div>

    <div class="review-img">
      <img src="../assets/operation_melt_interview.jpg" alt="interview" width="400" height="300">
    </div>

    <div class="blank">

    </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.about {
  padding-left: 8px;
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas: 
  "anna-img about-anna"
  "anna-img otis"
  "review-text review-img"
  "review-text review-img";
}

.anna-img {
  grid-area: anna-img;
  padding-right: 8px;
  width: 10%;
}

.about-anna {
  grid-area: about-anna;
  padding: 10px;
}

.otis {
  grid-area: otis;
  vertical-align: bottom;
}

.review-text {
  grid-area: review-text;
  padding-top: 30px;
  padding-right: 20px;
  text-align: right;
}

.review-img {
  grid-area: review-img;
}

.blank {
  grid-area: blank;
}

</style>