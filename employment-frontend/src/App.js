import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
      <BrowserRouter>
      <div className="container">
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}/>
          <Route path="/employee" element={<ListEmployeeComponent/>}/>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
          <Route path="/add-employee/:id" element={<AddEmployeeComponent/>}/>
        </Routes>
        <FooterComponent/>
      </div>
      </BrowserRouter>
  );
}

export default App;
