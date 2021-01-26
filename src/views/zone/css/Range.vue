<template>
  <div>
    <div class="container">
      <input id="slider" type="range" />
      <div class="img"></div>
      <div class="filter"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const slider = document.getElementById("slider");
    console.log(slider);
    slider.addEventListener("input", function(e) {
      document.querySelector(".filter").style.width =
        (e.target.value / 100) * 400 + "px";
    });
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 400px;
  height: 250px;
  margin: auto;
  overflow: hidden;
  .img,
  .filter {
    width: 400px;
    height: 250px;
    background-image: url("https://source.unsplash.com/random");
    background-size: 400px 250px;
  }
  .filter {
    position: absolute;
    width: 200px;
    top: 0;
    left: 0;
    // filter: blur(10px); // 模糊
    filter: saturate(0); // 灰色
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    -webkit-appearance: none;
    appearance: none;
    width: 400px;
    height: 250px;
    background: transparent;
    outline: none;
    margin: 0;
    transition: all 0.2s;
  }
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 5px;
    height: 250px;
    background: white;
    cursor: e-resize;
  }
}
</style>
