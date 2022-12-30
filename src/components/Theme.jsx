import { useTheme } from "./ThemeContext"
import '../styles/Theme.css'

const Theme = () => {
  const { theme } = useTheme()
  return (
    <div className="Theme">
      <h1>This is the {theme} theme!</h1>
    </div>
  )
}

export default Theme
