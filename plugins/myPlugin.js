class Plugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        const filename = compiler.options.output.filename
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script src='${filename}'></script>
</body>
</html>`
        compilation.assets['index.html'] = {
          source() {
            return html
          },
          size() {
            return html.length
          },
        }
        callback()
      }
    )
  }
}

module.exports = Plugin
