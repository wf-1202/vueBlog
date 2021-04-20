## 路由传参（尽量别用）

当子页面this.$router.back()返回需要带参数时

我用this.$router.replace({path:'',query:{}})，来传值。

但replace返回时，是返回上上个页面

如果用this.$router.back()的话，上一级页面会显示两次（第一次地址带参，第二次不带）

所以，用this.$router.go(-2)比较好。

如果不传值的情况，返回判断一下即可。