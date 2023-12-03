import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars , faFilter} from "@fortawesome/free-solid-svg-icons";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
library.add(faBars,faFilter);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="characters" element={<Characters />}></Route>
          <Route path="character/:id" element={<Character/>}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
