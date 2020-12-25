<template>
  <div>
    <div class="captcha">
      <input
        v-for="(c, index) in ct"
        :key="index"
        type="number"
        v-model="ct[index]"
        ref="input"
        :style="{ borderBottomColor: index <= cIndex ? '#00d1ac' : '#f2f2f2' }"
        @input="
          e => {
            onInput(e.target.value, index);
          }
        "
        @keydown.delete="
          e => {
            onKeydown(e.target.value, index);
          }
        "
        @focus="onFocus"
        :disabled="loading"
      />
    </div>
    <div
      v-show="verification"
      class="recode"
      :style="{ color: verification ? '#666' : '#00d1ac' }"
    >
      重新获取<span v-if="verification">{{ timer }}</span>
    </div>
    <div
      v-show="!verification"
      class="recode"
      :style="{ color: verification ? '#666' : '#00d1ac' }"
      @click="getCode"
    >
      重新获取
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ct: ["", "", "", ""],
      loading: false,
      msg: "",
      timer: 60,
      verification: true
    };
  },
  computed: {
    ctSize() {
      return this.ct.length;
    },
    cIndex() {
      let i = this.ct.findIndex(item => item === "");
      i = (i + this.ctSize) % this.ctSize;
      return i;
    },
    lastCode() {
      return this.ct[this.ctSize - 1];
    }
  },
  watch: {
    cIndex() {
      this.resetCaret();
    },
    lastCode(val) {
      if (val) {
        console.log("this.ctSize", this.ctSize);
        this.$refs.input[this.ctSize - 1].blur();
        this.sendCaptcha();
      }
    }
  },
  mounted() {
    this.resetCaret();
    this.countDown();
  },
  methods: {
    onInput(val, index) {
      this.msg = "";
      val = val.replace(/\s/g, "");
      if (index == this.ctSize - 1) {
        this.ct[this.ctSize - 1] = val[0]; // 最后一个码，只允许输入一个字符。
      } else if (val.length > 1) {
        let i = index;
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          this.ct[i] = val[i];
        }
        this.resetCaret();
      }
    },
    // 重置光标位置。
    resetCaret() {
      this.$refs.input[this.ctSize - 1].focus();
    },
    onFocus() {
      // 监听 focus 事件，将光标重定位到“第一个空白符的位置”。
      let index = this.ct.findIndex(item => item === "");
      index = (index + this.ctSize) % this.ctSize;
      console.log(this.$refs.input);
      this.$refs.input[index].focus();
    },
    onKeydown(val, index) {
      if (val === "") {
        // 删除上一个input里的值，并对其focus。
        if (index > 0) {
          this.ct[index - 1] = "";
          this.$refs.input[index - 1].focus();
        }
      }
    },
    sendCaptcha() {
      console.log();
      this.msg = `发送验证码到服务器：${this.ct.join("")}`;
      // 此时无法操作 input。。
      this.loading = true;
      setTimeout(() => {
        this.msg = "验证码错误";
        this.loading = false;
        this.$nextTick(() => {
          this.reset();
        });
      }, 3000);
    },
    reset() {
      // 重置。一般是验证码错误时触发。
      this.ct = this.ct.map(item => "");
      this.resetCaret();
    },
    getCode() {
      this.verification = true;
      this.countDown();
    },
    countDown() {
      this.timer = 60;
      let authTimer = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.verification = false;
          clearInterval(authTimer);
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.captcha {
  display: flex;
  margin-left: 60px;
  margin-top: 213px;
}
.recode {
  font-size: 24px;
  color: #666;
  margin-top: 30px;
  margin-left: 60px;
}
input {
  margin-right: 60px;
  width: 113px;
  text-align: center;
  border: none;
  border-bottom: 2px solid #f2f2f2;
  font-size: 60px;
  color: #333;
  font-weight: bold;
  outline: none;
}
input:last-of-type {
  margin-right: 0;
}
input:disabled {
  color: #000;
  background-color: #fff;
}
.msg {
  text-align: center;
}
</style>
