import parser from 'ua-parser-js'

export const uaParser = userAgent => {
  if (!process.client) return {}
  const parseResult = parser(userAgent || window.navigator.userAgent || '')
  const browserName = String(parseResult.browser.name).toLowerCase()
  const isTargetDevice = browsers => {
    return browsers.some(browser => browser.toLowerCase() === browserName)
  }

  return {
    result: parseResult,
    isChrome: isTargetDevice(['Chrome', 'Chromium']),
    isSafari: isTargetDevice(['Safari']),
    isWechat: isTargetDevice(['Wechat']),
    isIos: parseResult.os.name === 'iOS',
    isAndroid: parseResult.os.name === 'Android',
    isMobile: parseResult.device.type === 'mobile',
    isPc: parseResult.device.type !== 'mobile'
  }
}
