const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')

esbuild.build({
  watch: {
    onRebuild (error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    }
  },
  entryPoints: ['src/packs/app.js'],
  bundle: true,
  outdir: 'dist',
  plugins: [sassPlugin({
    file: 'app.css'
  })]
}).catch(() => process.exit(1))
