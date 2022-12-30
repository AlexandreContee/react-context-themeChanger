import { ThemeProvider } from './components/ThemeContext'
import App from './App'

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Root
