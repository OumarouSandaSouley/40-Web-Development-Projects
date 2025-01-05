
import logo from './assets/logo.jpg'
import Citation from './components/Citation'
import Banner from './sections/Banner'
import BeProud from './sections/BeProud'
import BestSellers from './sections/BestSellers'
import Danger from './sections/Danger'
import FinalGo from './sections/FinalGo'
import Footer from './sections/Footer'
import GoogleSheet from './sections/GoogleSheet'
import Header from './sections/Header'
import Hero from './sections/Hero'
import MyServices from './sections/MyServices'
import Selling from './sections/Selling'
import Story from './sections/Story'
import Warning from './sections/Warning'



function App() {

  return (
    <>
      <main className="container w-full bg-white">
        <Header />
        <Hero />
        <Citation />
        <MyServices />
        <Story />
        <Banner />
        <GoogleSheet />
        <BestSellers />
        <Warning />
        <Banner />
        <Selling />
        <BeProud />
        <Danger />
        <FinalGo />
      </main>
      <Footer />
    </>
  );
}

export default App
