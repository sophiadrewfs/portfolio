import Header from './Header';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from "./Skills"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
