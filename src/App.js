import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage";
import Navbar from './components/Navbar';
import Projectspage from './pages/Projectspage';
import Projectdetails from './pages/Projectdetails';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/projects' element={<Projectspage />} />
        <Route path='/projects/:projectId' element={<Projectdetails />} />
        <Route path='*' element={<ErrorPage/>} />
        
     </Routes>
    </div>
  );
}

export default App;
