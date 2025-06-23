import { useState } from 'react'
import './App.css'

function App() {
  const [welcomeClicked, setWelcomeClicked] = useState(false)

  const handleWelcomeClick = () => {
    setWelcomeClicked(true)
    // Reset after 2 seconds to match original behavior
    setTimeout(() => {
      setWelcomeClicked(false)
    }, 2000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="welcome-title">Welcome to My Website</h1>
        <p className="welcome-subtitle">A beautiful vanilla HTML, CSS, and JavaScript experience</p>
      </header>
      
      <main>
        <section className="card">
          <h2>Hello, World! 👋</h2>
          <p>This is a simple yet elegant homepage built with vanilla web technologies.</p>
          <button 
            id="welcome-btn" 
            className="cta-button"
            onClick={handleWelcomeClick}
          >
            {welcomeClicked ? 'Thanks for clicking! 🎉' : 'Click me!'}
          </button>
        </section>
        
        <section className="features">
          <div className="feature">
            <h3>HTML5</h3>
            <p>Semantic and accessible markup</p>
          </div>
          <div className="feature">
            <h3>CSS3</h3>
            <p>Modern styling with flexbox and animations</p>
          </div>
          <div className="feature">
            <h3>JavaScript</h3>
            <p>Interactive functionality and dynamic content</p>
          </div>
        </section>
      </main>
      
      <footer>
        <p className="read-the-docs">
          &copy; 2024 My Website. Built with ❤️ using vanilla web technologies.
        </p>
      </footer>
    </div>
  )
}

export default App 