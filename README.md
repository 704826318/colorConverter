# ColorConverter ![npm version](https://badge.fury.io/js/color-format-convert.svg)
A color conversion tool, currently only supports HEX and RGB conversion

颜色格式转换工具, 目前只支持HEX和RGB之间转换

  > Example

  - RGB and HEX transformation
 
  - rgb和16进制位颜色转换
  ```javascript

  colorConvert('#ffffff') // rgb(255,255,255)

  colorConvert('rgb(255, 255, 255)') // #ffffff

  ```

  . HEX and RGBA transformation
 
  . rgba和16进制位转换

  ```javascript

  colorConvert('rgba(255, 255, 255, 1)') // #ffffffff

  colorConvert('#ffffffff') // rgba(255,255,255, 1)

  ```
  > Install

  - `npm install color-format-convert`
  
  - `yarn add color-format-convert`
