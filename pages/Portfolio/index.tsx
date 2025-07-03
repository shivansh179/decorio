import Faq from "../Components/Faq";
import FeaturedProjects from "../Components/FeaturedProjects";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import LeadForm from "../Components/LeadForm";


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Faq />
        <LeadForm />
      </main>
      {/* <FloatingWidgets /> */}
    </div>
  );
}