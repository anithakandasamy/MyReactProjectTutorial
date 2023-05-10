import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import Card1 from "./components/card1/Card1";
import Body from "./components/body/Body";
import PropsCardParent from "./components/propsCardParent/PropsCardParent";
import Categories from "./components/categories/Categories";
import StateCard from "./components/stateCard/StateCard";
import SignIn from "./components/signin/SignIn";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Carousel></Carousel>
      <Card1></Card1>
      <PropsCardParent></PropsCardParent>
      <StateCard></StateCard>
      <SignIn></SignIn>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
