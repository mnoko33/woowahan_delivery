import { commaizeNumber } from './commaizeNumber';

export const convertDeliveryTimeToStr = ([minTime, maxTime]) => {
  return `${minTime}~${maxTime}`;
}

export const convertDeliveryTipToStr = ([minCost, maxCost]) => {
  if (maxCost) {
    return `${commaizeNumber(minCost)}원~${commaizeNumber(maxCost)}원`
  }
  return `${commaizeNumber(minCost)}원`;
}