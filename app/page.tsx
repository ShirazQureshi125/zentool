'use client'
import Footer from "./components/footer/footer";
import ResponsiveAppBar from "./components/header.components/navbar";
import Section1 from "./components/main.components/section1";
import Section2 from "./components/main.components/section2";
import Section3 from "./components/main.components/section3";
import Section4 from "./components/main.components/section4";

export default function Home() {
  return (
    <header>
      <ResponsiveAppBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>

   

    </header>
 
  );
}
