//颜色格式转换工具
/**
 * @param {string} colorStr
 * @returns {string} color
 *  ### example
 * ```
 *  xxxx.colorConvert('#ffffff') // rgb(255,255,255)
 *  
 *  xxxx.colorConvert('rgba(255,255,255,1)') // #ffffffff
 * ```
 */
  function colorConvert (colorStr) {
  if (!colorStr) { return colorStr; }
  const rgx = /^(#)([0-9A-Fa-f]{6,8})|^(rgb|rgba)\(([0-9]{1,3})\,\s*([0-9]{1,3})\,\s*([0-9]{1,3})\,?\s*([01]\.?\d*)?\)$/;
  const result = colorStr.match(rgx);
  if (!result) { return colorStr; }
  const latest = [];
  if (result[1] === '#') {
    const strArr = result[2].split('');
    for (let i = 0; i < strArr.length; i+= 2) {
      // tslint:disable-next-line: radix
      latest.push(parseInt('0x' + strArr[i] + strArr[i + 1]));
    }
    return strArr.length > 6? `rgba(${latest.slice(0,3).join(',')},${latest[3]/255})`: `rgb(${latest.join(',')})`;
  } else if(result[3] === 'rgb' || result[3] === 'rgba') {
    for (let i = 4; i <= 6; i++) {
      latest.push((+result[i]).toString(16));
    }
    return '#'+ (result[7] !== undefined ? (latest.join('') + Math.round(255 * +result[7]).toString(16)):latest.join(''));
  }
}

module.exports = {
  colorConvert
};