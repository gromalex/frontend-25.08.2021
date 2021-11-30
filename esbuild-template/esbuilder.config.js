const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')

esbuild.build({
  entryPoints: ['src/packs/app.js'],
  bundle: true,
  outdir: 'dist',
  plugins: [sassPlugin({
    file: 'app.css'
  })]
})
