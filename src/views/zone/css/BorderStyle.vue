<template>
  <div style="margin:20px">
    <div class="border">hover</div>
    <div class="dashed">hover</div>
    <div class="outline">hover</div>
    <div class="layout"></div>
    <div class="connic">
      <div class="connic_"></div>
    </div>
    <div class="btn">Hello</div>
    <div class="border-image"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.border {
  width: 200px;
  height: 100px;
  margin: auto;
  border: 1px solid #03a9f3;
  position: relative;
  text-align: center;
  line-height: 100px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    transition: 0.3s ease-in-out;
  }
  &::before {
    top: -5px;
    left: -5px;
    border-top: 1px solid #03a9f3;
    border-left: 1px solid #03a9f3;
  }
  &::after {
    right: -5px;
    bottom: -5px;
    border-bottom: 1px solid #03a9f3;
    border-right: 1px solid #03a9f3;
  }
  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
}
.dashed {
  width: 200px;
  height: 100px;
  margin: 20px auto;
  position: relative;
  text-align: center;
  line-height: 100px;
  background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
  background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  &:hover {
    animation: linearGradientMove 0.3s infinite linear;
  }
  @keyframes linearGradientMove {
    100% {
      background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
  }
}
.outline {
  width: 200px;
  height: 100px;
  margin: 20px auto;
  position: relative;
  text-align: center;
  line-height: 100px;
  outline: 1px solid #333;
  outline-offset: -1px;
  &:hover {
    outline: none;
    background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(0, #333 50%, transparent 0) repeat-y,
      linear-gradient(0, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
    animation: move 0.3s infinite linear;
    @keyframes move {
      100% {
        background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
      }
    }
  }
}
.layout {
  width: 400px;
  height: 300px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  padding: 2rem;
  &::before {
    content: "";
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
    animation: opacityChange 3s infinite alternate;
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes opacityChange {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
}
.connic {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  margin: 20px auto;
  .connic_ {
    position: relative;
    z-index: 0;
    width: 400px;
    height: 300px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(
        transparent,
        rgba(168, 239, 255, 1),
        transparent 30%
      );
      animation: rotate 4s linear infinite;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #000;
      border-radius: 5px;
    }
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
  }
}
.btn {
  position: relative;
  margin: auto;
  width: 120px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border: 2px solid gold;
  border-radius: 10px;
  background: gold;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    filter: contrast(1.1);
  }

  &:active {
    filter: contrast(0.9);
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid gold;
    transition: all 0.5s;
    animation: clippath 3s infinite linear;
    border-radius: 10px;
  }
  &::after {
    animation: clippath 3s infinite -1.5s linear;
  }
  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }

    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
  }
}
.border-image {
  width: 400px;
  height: 300px;
  border: 10px solid;
  margin: 20px auto;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
}
</style>
