<template>
  <div style="display:flex;justify-content:center;align-items:center">
    <div style="display: inline-block;position: relative;">
      <svg :width="size" :height="size">
        <circle
          fill="transparent"
          :stroke-width="stroke"
          stroke="#eee"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
        ></circle>
        <circle
          style="transform: rotate(-90deg);transform-origin: 50% 50%;"
          fill="transparent"
          :stroke-width="stroke"
          stroke="#000"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
          stroke-linecap="round"
        ></circle>
      </svg>
      <span
        style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); font-size:80px;font-family:monspace"
        >{{ countdown }}</span
      >
    </div>
    <button @click="animate">111</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 120,
      stroke: 10,
      precentage: 100,
      timer: null,
      seconds: 5
    };
  },
  computed: {
    radius() {
      return this.size / 2 - this.stroke / 2;
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - (this.circumference * this.precentage) / 100;
    },
    countdown() {
      return Math.ceil((this.seconds * this.precentage) / 100);
    }
  },
  methods: {
    animate() {
      this.timer = setInterval(() => {
        this.precentage -= 0.1;
        if (this.precentage <= 0) {
          clearInterval(this.timer);
          this.precentage = 100;
        }
      }, (this.seconds * 1000) / 100 / 10);
    }
  }
};
</script>
<style lang="scss">
</style>
