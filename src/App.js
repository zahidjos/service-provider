import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import About from './component/About/About';
import SignIn from './component/SignIN/SignIn';
import CheckOut from './component/CheckOut/CheckOut';
import SignUp from './component/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/logIn' element={<SignIn></SignIn>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
        <Route path='/checkOut/:serviceId' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
