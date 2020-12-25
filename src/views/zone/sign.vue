<template>
  <div>
    <div class="sign">
      <div class="wrapper">
        <div class="handBtn">
          <img
            class="black"
            @click="changeColor(1)"
            style="width:0.9rem;height:0.9rem;left:0.1rem"
            v-if="active == 0"
            src="@/assets/img/color_black_selected.png"
            alt=""
          />
          <img
            class="black"
            @click="changeColor(0)"
            v-if="active == 1"
            src="@/assets/img/color_black.png"
            alt=""
          />
          <img
            class="red"
            @click="changeColor(1)"
            v-if="active == 0"
            src="@/assets/img/color_red.png"
            alt=""
          />
          <img
            class="red"
            @click="changeColor(0)"
            style="width:0.9rem;height:0.9rem;left:0.1rem"
            v-if="active == 1"
            src="@/assets/img/color_red_selected.png"
            alt=""
          />
          <div class="rewrite" @click="overwrite">重写</div>
          <div class="preview">预览</div>
          <div class="upload">上传</div>
        </div>
        <div class="handCenter" ref="canvasHW">
          <canvas
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
            ref="canvasF"
            @mousedown="mouseDown"
            @mousemove="mouseMove"
            @mouseup="mouseUp"
          ></canvas>
        </div>
        <div class="handRight">
          <div class="handTitle">手写板</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "电子签名",
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
      color: ["#000", "#FF0000"],
      linewidth: 3,
      isDraw: false, // 签名标记
      active: 0 // 颜色选择标记
    };
  },
  mounted() {
    let canvas = this.$refs.canvasF;
    canvas.height = this.$refs.canvasHW.offsetHeight - 6;
    canvas.width = this.$refs.canvasHW.offsetWidth - 6;
    this.canvasTxt = canvas.getContext("2d");
    // if (this.active == 0) {
    //   this.canvasTxt.strokeStyle = this.color[0];
    // } else {
    //   this.canvasTxt.strokeStyle = this.color[1];
    // }
    this.canvasTxt.lineWidth = this.linewidth;
  },
  methods: {
    // 回显签名
    async shouSign() {
      await axios.fetch(Http.SHOW_SIGH).then(res => {
        if (res && res.code == 0) {
          if (res.msg) {
            // 一定要设置为let，不然图片不显示
            let image = new Image();
            // 解决跨域问题
            image.setAttribute("crossOrigin", "anonymous");
            let imageUrl = res.msg;
            console.log(imageUrl);
            image.src = imageUrl;
            // image.onload为异步加载
            image.onload = () => {
              var canvas = document.createElement("canvas");
              canvas.width = image.width;
              canvas.height = image.height;
              // var context = canvas.getContext("2d");
              this.canvasTxt.drawImage(image, 0, 0, image.width, image.height); // 根据自己需要确定大小

              //   var quality = 0.8;
              //   // 这里的dataurl就是base64类型
              //   this.img = canvas.toDataURL("image/jpeg", quality); // 使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
            };
          }
        }
      });
    },
    // 电脑设备事件
    mouseDown(ev) {
      ev = ev || event;
      ev.preventDefault();
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.startX = obj.x;
      this.startY = obj.y;
      this.canvasTxt.beginPath();
      this.points.push(obj);
      this.isDown = true;
    },
    // 移动设备事件
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        this.isDraw = true; // 签名标记
        let obj = {
          x:
            ev.targetTouches[0].clientX - this.$refs.canvasHW.offsetWidth * 0.2,
          y:
            ev.targetTouches[0].clientY - this.$refs.canvasHW.offsetHeight * 0.1
          //   y:
          //     ev.targetTouches[0].clientY -
          //     (document.body.offsetHeight * 0.5 +
          //       this.$refs.canvasHW.offsetHeight * 0.1)
        }; // y的计算值中：document.body.offsetHeight*0.5代表的是除了整个画板signatureBox剩余的高，this.$refs.canvasHW.offsetHeight*0.1是画板中标题的高
        this.startX = obj.x;
        this.startY = obj.y;
        this.canvasTxt.beginPath();
        this.points.push(obj);
      }
    },
    // 电脑设备事件
    mouseMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY);
        this.canvasTxt.lineTo(obj.x, obj.y);
        this.canvasTxt.stroke();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },
    // 移动设备事件
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        let obj = {
          x:
            ev.targetTouches[0].clientX - this.$refs.canvasHW.offsetWidth * 0.2,
          y:
            ev.targetTouches[0].clientY - this.$refs.canvasHW.offsetHeight * 0.1
          //   y:
          //     ev.targetTouches[0].clientY -
          //     (document.body.offsetHeight * 0.5 +
          //       this.$refs.canvasHW.offsetHeight * 0.1)
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY);
        this.canvasTxt.lineTo(obj.x, obj.y);
        this.canvasTxt.stroke();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },
    // 电脑设备事件
    mouseUp(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev == 1) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };
        this.canvasTxt.closePath();
        this.points.push(obj);
        this.points.push({ x: -1, y: -1 });
        this.isDown = false;
      }
    },
    // 移动设备事件
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y:
            ev.targetTouches[0].clientY -
            (document.body.offsetHeight * 0.5 +
              this.$refs.canvasHW.offsetHeight * 0.1)
        };
        // this.canvasTxt.beginPath();
        // this.canvasTxt.moveTo(this.startX, this.startY);
        // this.canvasTxt.lineTo(obj.x, obj.y);
        // this.canvasTxt.stroke();
        this.canvasTxt.closePath();
        this.points.push(obj);
        this.points.push({ x: -1, y: -1 });
      }
    },
    // 重写
    overwrite() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.isDraw = false; // 签名标记
    },
    // 关闭
    close() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.$emit("close", false);
    },
    // 确认签名
    surewrite() {
      var imgBase64 = this.$refs.canvasF.toDataURL();
      console.log("保存签名成功" + imgBase64);
      console.log(this.isDraw);
      if (this.isDraw) {
        alert("签名成功！");
        // this.$emit("surewrite",false);
      } else {
        alert("请签名后再确认！");
      }
    },
    changeColor(type) {
      console.log(type);
      this.active = type;
      this.canvasTxt.strokeStyle = this.color[type];
    }
  }
};
</script>
<style lang="scss" scoped>
.sign {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  .wrapper {
    width: 100%;
    height: 95vh;
    margin: 0.3rem 0;
    overflow: hidden;
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    font-size: 0.28rem;
    .handBtn {
      height: 95vh;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
      position: relative;
      flex: 1;
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
      .black {
        position: absolute;
        top: 0rem;
        left: 0.25rem;
      }
      .red {
        position: absolute;
        top: 1.22rem;
        left: 0.25rem;
      }
      .rewrite {
        position: absolute;
        transform: rotate(90deg);
        left: 0.05rem;
        top: 2.5rem;
        padding: 0.1rem 0.2rem;
        border: 0.02rem solid rgba(0, 0, 0, 0.2);
        border-radius: 0.1rem;
      }
      .preview {
        position: absolute;
        transform: rotate(90deg);
        left: 0.05rem;
        top: 4.5rem;
        padding: 0.1rem 0.2rem;
        border: 0.02rem solid rgba(0, 0, 0, 0.2);
        border-radius: 0.1rem;
      }
      .upload {
        position: absolute;
        transform: rotate(90deg);
        left: 0.05rem;
        bottom: 1.3rem;
        padding: 0.1rem 0.2rem;
        background: #008ef6;
        color: #fff;
        border-radius: 0.1rem;
      }
    }
    .handCenter {
      border: 0.04rem dashed #e9e9e9;
      flex: 5;
      overflow: hidden;
      box-sizing: border-box;
    }
    .handRight {
      display: inline-flex;
      align-items: center;
      .handTitle {
        transform: rotate(90deg);
        flex: 1;
        color: #666;
      }
    }
  }
  //   canvas {
  //   border: 1px solid gray;
  //   }
}
</style>
