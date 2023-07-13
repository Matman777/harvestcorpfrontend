import PhoneBook from './pages/phoneBook';
import Home from './pages/home';
import './css/home.css';
import './css/phonebook.css';
import './pages/login';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/annuaire" element={ <PhoneBook />} />
      </Routes>
    </BrowserRouter>
    
    
      </>
  );
}
export default App;


// {/* <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/annuaire" element={<PhoneBook />} />
//     //   </Routes>
//     // </BrowserRouter> */}