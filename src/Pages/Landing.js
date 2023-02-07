import Layout from './../Components/Layout/Layout';
import Header from './../Components/Header/Header';
import Body from './../Components/Body/Body';
import Marquee from './../Components/Marquee/Marquee';


function Landing() {
  return (
    <Layout>
        <Header />
        <Body />
        <Marquee />
    </Layout>
  );
}

export default Landing;
