import { Button } from './components/Button'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
      Aoba João
    </ThemeProvider>
  )
}
