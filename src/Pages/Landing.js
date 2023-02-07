import Layout from './../Components/Layout/Layout';
import Header from './../Components/Header/Header';
import Body from './../Components/Body/Body';
import Marquee from './../Components/Marquee/Marquee';
import Timeline from '../Components/Timeline/Timeline';


function Landing() {
  return (
    <Layout>
        <Header />
        <Timeline />
        <Marquee />
    </Layout>
  );
}

export default Landing;
