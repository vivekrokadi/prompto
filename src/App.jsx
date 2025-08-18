import React from 'react'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'


function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;