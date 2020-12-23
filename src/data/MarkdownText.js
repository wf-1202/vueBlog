export const scroll = {
  text:
    "## 监听页面滚动\n" +
    `    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
        console.log(top);
      });`
};
export const popup = {
  text:
    "## 监听物理返回\n" +
    `    // mounted中监听popstate
    mounted() {
        window.addEventListener("popstate", this.judgeBack, false);
    }

    // 需要物理返回的操作 例：弹框需要的操作
    if (this.showSearchPop) {
        this.showSearchPop = false;
      }
      if (this.showPop && (this.showCustomStartPop || this.showCustomEndPop)) {
        this.showCustomStartPop = false;
        this.showCustomEndPop = false;
      } else {
        if (this.showPop) {
          this.showPop = false;
        }
      }
      if (this.showWarnPop) {
        this.showWarnPop = false;
      }
    }
    
    // 页面销毁移除监听事件。
    destroyed() {
        window.removeEventListener("popstate", this.judgeBack, false);
    },`
};
export const resize = {
  text:
    "## 监听键盘谈起\n" +
    `    let height = document.body.clientHeight; // 页面高度
    window.addEventListener("resize", function() {
      let rHeight = document.body.clientHeight;  // 弹起后重新获取页面高度。
      if (height - 110 > rHeight) {
        document.getElementById("footer").style.display = "none";
      } else {
        document.getElementById("footer").style.display = "block";
      }
    });`
};
export const vantCountDown = {
  text:
    "## Vant组件CountDown\n" +
    "组件API说明中，说参数time可以传number|string，如果是写死的倒计时没问题。\n" +
    "如果是未来时间减去当前时间的倒计时,需要传入的值是你自己计算的未来时间减去当前时间的毫秒值。\n" +
    "vant代码里虽然有getRemain()方法，但并没有运行这个方法。"
};
