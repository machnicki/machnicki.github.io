import path from 'path'

const MAIN_DIR = path.resolve(__dirname, 'src')

const aliases = {
  components: path.resolve(MAIN_DIR, 'components'),
  containers: path.resolve(MAIN_DIR, 'containers'),
}

export default aliases
