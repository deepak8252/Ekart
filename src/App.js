import React from "react";
import  ReactDOM  from "react-dom/client";
import Home from "./Home";
import Header from "./component/Header";
import { Provider } from "react-redux";
import appstore from "./store/Appstore";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App=()=>{
return (
    <>
     <Provider store={appstore}>
 
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
    </>
)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

