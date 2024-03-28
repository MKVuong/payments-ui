import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import PageHeader from './components/PageHeader';
import Search from './components/Search';
import Transactions from './components/Transactions/Transactions';
import { useState } from 'react';
import { UserContext, User} from './components/context/UserContext'
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState<User>({name: "", role: ""})
  return (
    <UserContext.Provider 
     value= {{user : user ,
     login : setUser , 
     logout: () => setUser({name: "", role : ""}) }} >
    <BrowserRouter><center>
        <PageHeader/>
        <Routes>
          <Route path="/add" element={<AddTransaction/>} />
          <Route path="/find" element={
              <><Search /><Transactions /></>
          } />
          <Route path="" element = {<h1>Home Page</h1>} />
          <Route path="*" element = {<h1>Page Not Found</h1>} />
        </Routes>
    </center></BrowserRouter>
    <Footer />
    </UserContext.Provider>
);
}

export default App;
