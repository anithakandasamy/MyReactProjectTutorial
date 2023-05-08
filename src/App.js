import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import Card1 from "./components/card1/Card1";
import Body from "./components/body/Body";
import PropsCardParent from "./components/propsCardParent/PropsCardParent";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Card1></Card1>
      <PropsCardParent></PropsCardParent>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
