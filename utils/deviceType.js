/**
 * @param UA { string }
 * @return {{
 *   platform: string
 *   type: string
 *   type?: string
 *   env?: string
 * }}
 */
export function deviceType(UA) {
  const verifyEnv = {
    isAndroid: !!/Android/i.test(UA),
    isIOS: !!/iPhone|iPad|iPod/i.test(UA),
    isMoible: !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(
      UA
    ),
    isQQ: !!/QQ/i.test(UA),
    isWeibo: !!/Weibo/i.test(UA),
    isWechat: !!/MicroMessenger/i.test(UA)
  }
  const deviceInfo = {}
  if (verifyEnv.isMoible) {
    deviceInfo.platform = 'mobile'
    deviceInfo.isMobile = true
    deviceInfo.type = 'mobile'
    if (verifyEnv.isIOS) deviceInfo.type = 'ios'
    if (verifyEnv.isAndroid) deviceInfo.type = 'android'
    if (verifyEnv.isWechat) deviceInfo.env = 'wechat'
    if (verifyEnv.isWeibo) deviceInfo.env = 'weibo'
    if (verifyEnv.isQQ) deviceInfo.env = 'qq'
  } else {
    deviceInfo.platform = 'pc'
    deviceInfo.isPc = true
    deviceInfo.type = 'pc'
  }
  return deviceInfo
}
