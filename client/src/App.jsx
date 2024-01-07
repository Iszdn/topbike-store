import './App.css'
import '../src/assets/sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ShopPage from './Pages/ShopPage';
import Cart from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/Account';
import SecondLayout from './Layout/SecondaryLayout';
function App() {
  

  return (
    <>
<Routes>
 <Route path='/' element={<Layout/>}>
<Route path='/' element={<HomePage/>}/>
 </Route>
 <Route path='/' element={<SecondLayout/>}>
<Route path='/shop' element={<ShopPage/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/account' element={<AccountPage/>}/>

<Route path='*' element={<NotFound/>}/>

</Route>
</Routes>
    
    </>
  )
}

export default App
