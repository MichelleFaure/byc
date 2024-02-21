import CarouselHome from "../Components/CarouselHome"
import About from "../Components/About";
import ProjectsHome from "../Components/ProjectsHome";
import Services from "../Components/Services";
import ContactCard from "../Components/ContactCard";
import Clients from "../Components/Clients";

const Home = () => {
  return (
    <>
      <CarouselHome></CarouselHome>
      <About></About>
      <ProjectsHome></ProjectsHome>
      <Services></Services>
      <ContactCard></ContactCard>
      <Clients></Clients>
    </>
  );
}
export default Home