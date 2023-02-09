import { useContext } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { WindowContextProvider } from "./context/WindowContextProvider";
import { Home } from "./pages/Home";
import { Vehicles } from "./pages/Vehicles";
const Wrapper = styled.section`
  display:flex;
  min-height: 100vh;
  `;
const MainContainer = styled.section`
  flex-grow: 1;
  padding: 20px 16px 30px 16px;
`;
export const App = () => {
return (
    <Wrapper>
          <WindowContextProvider>
            <Sidebar />
            <MainContainer>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicles" element={<Vehicles />} />
              </Routes>
            </MainContainer>
          </WindowContextProvider>
    </Wrapper>
);
}
