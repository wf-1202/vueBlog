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
    "![](../../assets/img/code.png)\n" +
    "组件API说明中，说参数time可以传number|string，如果是写死的倒计时没问题。\n" +
    "如果是未来时间减去当前时间的倒计时,需要传入的值是你自己计算的未来时间减去当前时间的毫秒值。\n" +
    "vant代码里虽然有getRemain()方法，但并没有运行这个方法。\n"
};
export const smsCode = {
  text:
    "## 花里胡哨的短信验证码\n" +
    "![](../../assets/img/code.png)\n" 
};
export const sign = {
  text:
    "## 电子签名\n" +
    "注意一：mounted()中，canvas.height，canvas.width，根据自己需求调整。\n" +
    "注意二：方法中，x和y的定位，需要自己调整。"
};
export const aboutRouter = {
  text:
    "## 路由传参（尽量别用）\n" +
    "当子页面this.$router.back()返回需要带参数时，\n" +
    "我用this.$router.replace({path:'',query:{}})，来传值。\n" +
    "但replace返回时，是返回上上个页面，\n"+
    "如果用this.$router.back()的话，上一级页面会显示两次（第一次地址带参，第二次不带）\n"+
    "所以，用this.$router.go(-2)比较好。\n" + 
    "如果不传值的情况，返回判断一下即可。"
};
