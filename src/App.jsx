import Switch from "./components/Switch"
import Theme from "./components/Theme"
import { useTheme } from "./components/ThemeContext"
import './styles/App.css'

const App = () => {

  const {theme} = useTheme()

  return (
    <section
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff'
      }}  
    >
      <div>
        <Switch />
      </div>
      <div id="body">
        <Theme />
      </div>
      <footer id="footer">
        <span>Developed By Alexandre Conte using Context</span>
      </footer>
    </section>
  )
}

export default App
