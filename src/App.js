import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registration'element={<Registration></Registration>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
