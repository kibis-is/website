// enums
import { PlatformEnum } from '@site/src/enums';

export default function checkPlatform(): PlatformEnum {
  const userAgent = navigator.userAgent || navigator.vendor || window['opera'];

  // check if the user agent is an android device
  if (/android/i.test(userAgent)) {
    return PlatformEnum.Android;
  }

  // check if the user agent is an ios device
  if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
    return PlatformEnum.IOS;
  }

  return PlatformEnum.Web;
}
