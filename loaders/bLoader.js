/**
 * @param {string|Buffer} content 源文件的内容
 * @param {object} [map] SourceMap 数据
 * @param {any} [meta] meta 数据，可以是任何内容
 */
function bLoader(content, map, meta) {
  console.log('bLoader')
  console.log(content)
  return content + `console.log('b-loader');`
}
/**
 *
 * @param {*} remainingRequest  剩余请求
 * @param {*} precedingRequest 前置请求
 * @param {*} data 数据对象
 */
bLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('bLoader Pitching Loader')
  console.log(remainingRequest, precedingRequest, data)
  return `console.log('bLoader pitch');`
}

module.exports = bLoader
