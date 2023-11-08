import 'styled-components'
import { defaultTheme } from '../style/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-componets' {
  export interface DefaultTheme extends ThemeType {}
}
