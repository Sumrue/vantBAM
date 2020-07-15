;(function (doc, win) {
  // eslint-disable-next-line one-var
  var docEl = doc.documentElement,
    resizeEvt =
      'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 37.5 * (clientWidth / 375) + 'px'
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

// 移动适配方案 最初以375尺寸为基准 ，100px = 3.75rem，就是如果UI初稿是375的话，1px 就是按照3.75rem/100px 来算（0.0375rem/px)
// 开发时直接用图纸设计px尺寸乘这个参数就可以得出要的rem
