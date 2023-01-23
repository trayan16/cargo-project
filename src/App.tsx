import {
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
const Wrapper = styled.section`
  display:flex;
  height: 100%
`;
export const App = () => {
  
return (
    <Wrapper>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>ABOUT</div>} />
          </Routes>

    </Wrapper>
);
}
