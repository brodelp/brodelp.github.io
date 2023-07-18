import { useEffect, useState } from 'react'

import './App.css'

function Card(props: any) {
  return (
    <div className="card bg-base-100 border ">
      <div className="card-body pt-10">
        {props.title && <h2 className="card-title">{props.title}</h2>}
        {props.children}
      </div>
    </div>
  );
}

function NavButton(props: any) {
  return (
    <a
      className="btn btn-sm btn-outline btn-accent"
      onClick={
        () => props.handleClick(props.handler)
      }
    >
      {props.children}
    </a>
  )
}

function NavBar(props: any) {
  return (
    <div className="navbar rounded-full bg-neutral">
      <div className="flex-1 justify-evenly">
        <NavButton 
          handleClick={() => props.handleShowContent('home')}
        >
          Home
        </NavButton>

        <NavButton 
          handleClick={() => props.handleShowContent('resume')}
        >
          Resume
        </NavButton>

        <NavButton 
          handleClick={() => props.handleSetTheme()}
        >
          Mode
        </NavButton>
      </div>
    </div>
  );
}

function Content(props: any) {
  return (
    <Card>
      {props.content}
    </Card>
  )
}

function Home() {
  return (
    <div className="home">
      <h1 className="text-center text-xl">Welcome</h1>
    </div>
  )
}

function Resume() {
  return (
    <div className="resume">
      <h1 className="text-center text-xl">My Resume</h1>
      <br/>
      <div className="flex flex-col">
        <Card title="Biography">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborums.
          </p>
        </Card>
        <br/>
        <Card title="Education">
          <ul>
            <li>
              <h3>Bachelor of Science in Mechanical Engineering</h3>
              <p>
                <b>- University of Arkansas at Little Rock</b>, 2018-2021
              </p>
            </li>
            <li>
              <h3>Masters of Science in Bioinformatics</h3>
              <p>
                <b>- University of Arkansas at Little Rock</b>, 2022 - Expected 2024
              </p>
            </li>
          </ul>
        </Card>

      </div>
    </div>
  )
}

function App() {

  const [content, setShowContent] = useState('home');
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light');

  function handleShowContent(c: string) {
    setShowContent(c);
  }

  function handleSetTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')

    let html = document.querySelector('html');
    if (theme =="dark") {
      html?.setAttribute("data-theme", "dark");
    } else {
      html?.setAttribute("data-theme", "light")
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  let currentContent;

 switch(content) {
    case 'home':
      currentContent = <Home />
      break;
    case 'resume':
      currentContent = <Resume />
      break;
    default:
      currentContent = <Home />
 }


  return (
    <div className="App pt-10 px-10 h-screen">
      <NavBar 
        handleShowContent={handleShowContent}
        handleSetTheme={handleSetTheme}
      />
      {/* <Content figure="/src/assets/lounging.jpg"/> */}
      <br></br>
      <Content content={currentContent}/>
    </div>
  )
}

export default App
