import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import './assets/fonts/fontFace.css'
import { configureStore } from './configureStore'
import { GlobalStyle, theme } from '@ui/theme'
import { BookingPage } from '@features/booking'

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BookingPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
