import './App.css';
import UsersList from './components/UsersList';
import axios from 'axios';
import {useEffect,useState} from 'react';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
const [users,setUsers]=useState([])
 useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>setUsers(res.data))
.catch(err =>console.log(err))
  },[])
return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path='/users' element={< UsersList users={users}/> }/>
      <Route path='/users/:id' element={<UserDetails  users={users}/>  }/>
      </Routes>
    </div>
  );
}
export default App;
