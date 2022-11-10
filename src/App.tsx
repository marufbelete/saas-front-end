import React from 'react';
import './App.css';
import Header from "./pages/header"
import {ThemeProvider} from '@primer/react'
// import {useGetUsersQuery,useAddUserMutation} from "./service/user_api"
import Signup from './pages/signup';
import Login from './pages/login';
import ForgotPassword from './pages/forgot_password';

import {BrowserRouter as Router, Routes,Route,useNavigate,useParams} from 'react-router-dom'
import Home from './pages/home';
function App() {
  // const {data,error,isLoading,isFetching,isSuccess,refetch}=useGetUsersQuery()
  
  //we can use refetch() after chage the data
  //but this approach is not good
  // const [addUser]=useAddUserMutation()
  //addUser(user)
  //add user objet to save
  // const { data, status, error, refetch } = useGetPokemonByNameQuery(name, {
  //   pollingInterval: 3000,
  // })
  return (
<>
<ThemeProvider>
  <Router>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  </Router>
</ThemeProvider>
</>
  )}

export default App;
