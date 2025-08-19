import React from 'react'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'


function App() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;