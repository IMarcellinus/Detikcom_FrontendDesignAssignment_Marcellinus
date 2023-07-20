import Header from "../components/Header";
import Section from "./Hero";
import SectionAbout from "./SectionAbout";
import SectionAggregator from "./SectionAggregator";
import SectionMekanisme from "./SectionMekanisme";
import SectionRunningLogo from "./SectionRunningLogo";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Section />
      <SectionAbout />
      <SectionMekanisme />
      <SectionRunningLogo />
      <SectionAggregator />
      <Footer />
    </>
  );
};

export default LandingPage;
