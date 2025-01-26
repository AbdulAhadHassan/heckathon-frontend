// import { useContext, useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router";
// import Login from "./Login";
// import Admin from "./pages/admin/admin";
// import User from "./pages/user/user";
// import Teacher from "./pages/teacher/teacher";
// import { AuthContext } from "./context/AuthContext";
// import Cookies from "js-cookie";
// import Students from "./pages/students/students";
// import api from './api/api';

// function App() {
//   const { user } = useContext(AuthContext);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get('/');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("user=>", user);
//   console.log("token=>", Cookies.get("token"));
//   return (
//     <div>
//       <h1>Backend Data</h1>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//       <Routes>
//         <Route path="/" element={user ? <Navigate to={"/user"} /> : <Login />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/user" element={user ? <Students /> : <Navigate to={"/"} />} />
//         <Route path="/teacher" element={<Teacher />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import LandingPage from './components/LandingPage';
import Calculator from './components/Calculator';
import Registration from './pages/registration/registration';
import Login from './pages/login/login';
import LoanForm from './pages/loan/loan';
import Dashboard from './pages/dashboard/dashboard';
import AdminDashboard from './pages/admindashboard copy/admindashboard';
import UserDashboard from './pages/userdashboard/userdashboard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <div>
       <h1>Backend Data</h1>


    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Calculator />
        <Testimonials />
      </main>
      <Footer />


       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/calculator" element={<Calculator />} />
         <Route path="/registration" element={<Registration />}/> 
     
      
        <Route path="/login" element={<Login />} />
        
      
       
         <Route path="/loan-form" element={<LoanForm />} />
         <Route path="/dashboard" element={<Dashboard />}> 
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="user" element={<UserDashboard />} />
        </Route>
       </Routes>
     </div>
    </div>
    </div>
  );
}

export default App;