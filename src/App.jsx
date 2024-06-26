import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Video from './Pages/Video/Video.jsx'

function App() {


  const [sidebar,setSidebar] = useState(true);


  return (
    <div>
          <Navbar setSidebar={setSidebar} />
          <Routes>
                <Route path='/' element={<Home sidebar={sidebar} />} />
                <Route path='/video/:categoryId/:videoId' element={<Video />} />
          </Routes>
        
    </div>
  )
}

export default App
