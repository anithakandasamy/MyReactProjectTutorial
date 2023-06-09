import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Categories from "./components/categories/Categories";
// import Carousel from "./components/carousel/Carousel";
// import Card1 from "./components/card1/Card1";
// import PropsCardParent from "./components/propsCardParent/PropsCardParent";
// import StateCard from "./components/stateCard/StateCard";
// import CardModalFunction from "./components/cardModalFunction/CardModalFunction";
// import StateDemo from "./components/stateDemo/StateDemo";
// import CardBootstrapModal from "./components/cardBootstrapModal/CardBootstrapModal";
// import Employee from "./components/employee/Employee";
// import Search from "./components/search/Search";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      {/* <Carousel></Carousel>
      <Employee></Employee>
      <hr />
      <Search></Search>
      <Card1></Card1>
      <PropsCardParent></PropsCardParent>
      <StateCard></StateCard>
      <CardModalFunction></CardModalFunction>
      <CardBootstrapModal></CardBootstrapModal>
      <StateDemo></StateDemo> */}
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
