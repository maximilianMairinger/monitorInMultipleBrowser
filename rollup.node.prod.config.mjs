import { merge } from "webpack-merge"
import commonMod from "./rollup.node.common.config.mjs"


export default merge(commonMod, {
  input: 'app/src/monitorInMultipleBrowser.ts',
  output: {
    file: 'app/dist/cjs/monitorInMultipleBrowser.js',
    format: 'cjs'
  },
})