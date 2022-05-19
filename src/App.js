import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddNewSpice from './pages/AddNewSpice/AddNewSpice';
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

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
