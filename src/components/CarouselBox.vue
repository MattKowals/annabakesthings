<template>
  <div class="carousel">
    <div class="carousel-inner">
      
      <!-- Call in CarouselIndicator Component -->
      <!-- Adds radial button functionality at bottom -->
      <carousel-indicators 
        :total="slides.length" 
        :current-index="currentSlide" 
        @switch="switchSlide($event)"
      ></carousel-indicators>

      <!-- Call in CarouselItem Component -->
      <!--  -->
      <carousel-item v-for="(slide, index) in slides" 
        :slide="slide" 
        :key="`item-${index}`" 
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
        id="carousel-item"
        >
      </carousel-item>
      <carousel-controls @prev="prev" @next="next" ></carousel-controls>
    </div>
  </div>
</template>

<script>
  import CarouselItem from "./CarouselItem.vue";
  import CarouselControls from "./CarouselControls.vue";
  import CarouselIndicators from "./CarouselIndicators.vue"

  export default {
    components: {
      CarouselItem,
      CarouselControls,
      CarouselIndicators
    },
    props: ["slides"],
    data: () => ({
      currentSlide: 0,
      slideInterval: null,
      direction: "right"
    }),
    methods: {
      setCurrentSlide(index) {
        this.currentSlide = index;
      },
      prev(step = -1) {
        const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
        this.setCurrentSlide(index);
        this.direction = "left";
        this.startSlideTimer();
      },
      _next(step = 1) {
        const index = 
          this.currentSlide < this.slides.length -1 ? this.currentSlide + step : 0;
        this.setCurrentSlide(index);
        this.direction = "right";
        this.startSlideTimer();
      },
      next(step = 1) {
        this._next(step);
        this.startSlideTimer();
      },
      startSlideTimer() {
        this.stopSlideTimer();
        this.slideInterval = setInterval(() => {
          this._next();
        }, 5000);
      },
      stopSlideTimer() {
        clearInterval(this.slideInterval);
      },
      switchSlide(index) {
        const step = index - this.currentSlide;
        if (step > 0) {
          this.next(step)
        } else {
          this.prev(step)
        }
      }
    },
    mounted () {
      this.startSlideTimer();
    },
    beforeUnmount () {
      this.stopSlideTimer();
    }
  }
</script>

<style scoped>

.carousel {
  display: flex;
  justify-content: left;
  margin-left: 40px;
  /* justify-content: center; */
}


/* Manages size of carousel window */
.carousel-inner {
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
}


</style>