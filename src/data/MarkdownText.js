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
