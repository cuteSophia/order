/// 1rem（root em）单位的大小取决于文档的根元素（<html>标签）的字体大小
/// 1rem 默认等于 16px，以 375px 宽度为基准
/// 根据屏幕宽度实时计算根元素字体大小以调整 rem 单位
(function () {
  function resize() {
    var docElement = document.documentElement || document.body;
    var clientWidth = docElement.clientWidth;
    var maxWidth = 480,
      baseWidth = 375,
      baseFontSize = 16;
    var dynamicWidth = clientWidth > maxWidth ? maxWidth : clientWidth;
    var rootFontSize = (dynamicWidth * baseFontSize) / baseWidth;
    docElement.style.fontSize = rootFontSize + "px";
    console.log({ rootFontSize });
  }
  window.addEventListener("resize", resize);
  resize();
})();
