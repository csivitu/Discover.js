import Layout from './../Components/Layout/Layout';
import Header from './../Components/Header/Header';
import Body from './../Components/Body/Body';
import Marquee from './../Components/Marquee/Marquee';
import Timeline from '../Components/Timeline/Timeline';
import ContactUs from '../Components/ContactUs/ContactUs';



function Landing() {
  return (
    <Layout>
        <Header />
        <Body />
        <Timeline />
        <Marquee />
        <ContactUs />
    </Layout>
  );
}

export default Landing;
