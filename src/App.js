// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyJobs from "./components/MyJobs";
import MyPayments from "./components/MyPayments";
import MyOfferLatter from "./components/MyOfferLatter";
import MyCertificate from "./components/MyCertificate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/myjobs" element={<MyJobs></MyJobs>}></Route>

          <Route path="/mypayments" element={<MyPayments></MyPayments>}></Route>
          <Route
            path="/myofferlatter"
            element={<MyOfferLatter></MyOfferLatter>}
          ></Route>
          <Route
            path="/mycertificate"
            element={<MyCertificate></MyCertificate>}
          ></Route>
          {/* <Route path="/" element={<Login></Login>}></Route> */}
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
