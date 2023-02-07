import { Route,BrowserRouter,Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/register' element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

// import Layout from './Components/Layout/Layout';
// import Header from './Components/Header/Header';
// import Body from './Components/Body/Body';
// import Marquee from './Components/Marquee/Marquee';

// function App() {
//   return (
//     <Layout>
//         <Header />
//         <Body />
//         <Marquee />
//     </Layout>
//   );
// }

// export default App;
