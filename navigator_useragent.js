/* 判断浏览器类型 */

// 判断是否为IE浏览器
function isIE() {
  return /trident/ig.test(navigator.userAgent)
}

/* 判断设备类型 */

// 判断环境是否为移动端
function isMobile() {
  const
    mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire"),
    browser = navigator.userAgent.toLowerCase()
  for (var i = 0, len = mobileAgent.length; i < len; i++) {
    if (browser.indexOf(mobileAgent[i]) != -1) {
      return true
    }
  }
  return false
}

// 判断环境是否为ipad
function isIpad() {
  const
    mobileAgent = "ipad",
    browser = navigator.userAgent.toLowerCase()
  if (browser.indexOf(mobileAgent) != -1) {
    return true
  }
}

/* 判断操作系统类型 */

// 判断环境是否为macos
function isMacos() {
  return /macintosh|mac os x/ig.test(navigator.userAgent)
}

// 判断环境是否为linux（安卓手机为linux内核，返回值为true）
function isLinux() {
  return /linux/ig.test(navigator.userAgent)
}

// 判断环境是否为window
function isWindowos() {
  return /windows/ig.test(navigator.userAgent)
}

// 判断环境是否为安卓
function isAndroidos() {
  return /android/ig.test(navigator.userAgent)
}

// 判断环境是否ios（ipad与mac电脑返回值也为true）
function isIos() {
  return /ios/ig.test(navigator.userAgent)
}