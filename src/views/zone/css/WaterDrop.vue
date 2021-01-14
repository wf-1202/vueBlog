<template>
  <div class="container">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="collection"></div>
    <span>80%</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background: #000;
  flex-direction: column;
  overflow: hidden;
  filter: contrast(
    30
  ); // 对比度提高，将模糊边框，因为对比度的提升，重新画出实边，达到融合效果
  .drop {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    filter: blur(20px); // 模糊设定
    opacity: 0;
    animation: 2.5s drop linear infinite; // 动画时间：2.5s，动画名称：drop，速度：线性速度linear，无线播放：infinite
  }
  .drop:nth-child(2) {
    // transform: translateY(-80px);
    animation-delay: 0.5s;
  }
  .drop:nth-child(3) {
    // transform: translateY(-130px);
    animation-delay: 0.73s;
  }
  .collection {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
    filter: blur(20px);
    animation: 3s collection linear infinite;
  }
  span {
    position: absolute;
    font-family: Helvetica;
    font-size: 30px;
  }
  @keyframes drop {
    0% {
      transform: scale(0.7) translateY(-600px);
      opacity: 0;
    }
    50% {
      transform: scale(0.4) translateY(-200px);
      opacity: 1;
    }
    100% {
      transform: scale(0.3) translateY(0px);
    }
  }
  @keyframes collection {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.3) rotate(180deg);
      width: 90px;
      border-top-left-radius: 40%;
      border-bottom-left-radius: 45%;
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
}
</style>
