/**
 * @param {string|Buffer} content 源文件的内容
 * @param {object} [map] SourceMap 数据
 * @param {any} [meta] meta 数据，可以是任何内容
 */
function aLoader(content, map, meta) {
  console.log('aLoader')
  console.log(content)
  return content + `console.log('a-loader');`
}
/**
 *
 * @param {*} remainingRequest  剩余请求
 * @param {*} precedingRequest 前置请求
 * @param {*} data 数据对象
 */
aLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('aLoader Pitching Loader')
  console.log(remainingRequest, precedingRequest, data)
}

module.exports = aLoader
