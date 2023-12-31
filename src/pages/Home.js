import { useState } from "react";
import AddMovie from "../components/AddMovie/AddMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import DataMovie from "../utils/constants/DataMovie";

const Main = () => {
    const [item, setItem] = useState(DataMovie)
    return (
        <main>
            <Hero/>
            <Movies item={item} setItem={setItem}/>
            <AddMovie movies={item} setMovies={setItem}/>
            </main>
           
   
    );
}


const Home =() => {
    return (
        <>
        <Navbar />
        <Main />
        <Footer />
        </>
    )
}

export default Home;
