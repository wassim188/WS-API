import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import UserPosts from './components/UserPosts';
function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='users' element={<Users/>} />
        <Route path='posts/:id' element={<UserPosts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
