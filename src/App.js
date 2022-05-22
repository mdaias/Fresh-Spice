import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './pages/About/About';
import AddNewSpice from './pages/AddNewSpice/AddNewSpice';
import Blogs from './pages/Blogs/Blogs';
import Gallery from './pages/Home/Gallery/Gallery';
import Home from './pages/Home/Home/Home';
import Product from './pages/Home/Product/Product';
import ProductDetails from './pages/Home/ProductDetails/ProductDetails';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import MyItems from './pages/MyItems/MyItems';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/product' element={<Product></Product>}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>}>
        </Route>

        <Route path='/inventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}>
        </Route>

        <Route path='/addspice' element={
          <RequireAuth>
            <AddNewSpice></AddNewSpice>
          </RequireAuth>}>
        </Route>

        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
