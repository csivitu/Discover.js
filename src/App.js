import { Route,BrowserRouter,Routes } from "react-router-dom";
import Timelinepg from "./Pages/Timelinepg";
import ErrPage from "./Pages/404";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/timeline' element={<Timelinepg />} />
        <Route exact path='*' element={<ErrPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
