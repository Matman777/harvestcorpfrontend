import NavBar from "../components/nav";
// import '../css/home.css';
// import React, { useEffect } from 'react';

export default function Home() {
    return (
        <>
        <NavBar />
        <section className="home">
        <h1 className="home">HarvestCorp</h1>
        </section>
        </>
    )
}


  // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch("http://localhost:3001/api/");
    //         const data = await response.text();
    //         console.log(data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);