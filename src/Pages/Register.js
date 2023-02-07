import Layout from './../Components/Layout/Layout';
import Header from './../Components/Header/Header';
import Marquee from './../Components/Marquee/Marquee';
import RegForm from '../Components/Form/RegForm';


function Register() {
  return (
    <Layout>
        <Header />
        <RegForm />
    </Layout>
  );
}

export default Register;