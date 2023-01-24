
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const SidebarContainer = styled.section`
    width: 70px;
    background: #6f84bd;
    border-radius: 6px;
    padding: 30px 16px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
        color: #fff;
    }
`;
  export const Sidebar = () => {
  return (
      <SidebarContainer>
        <NavMenu>
          <NavLink to='/'>
            <HomeIcon fontSize="large" />
          </NavLink>
          <NavLink to='/'>
            <DirectionsBoatIcon fontSize="large"  />
          </NavLink>
          <NavLink  to='/'>
            <LocalShippingIcon fontSize="large"  />
          </NavLink>
          <NavLink to='/'>
            <DriveEtaIcon fontSize="large"  />
          </NavLink>
          {/* <NavLink to='/events'>
            Events
          </NavLink>
          <NavLink to='/annual'>
            Annual Report
          </NavLink>
          <NavLink to='/team'>
            Teams
          </NavLink>
          <NavLink to='/blogs'>
            Blogs
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SidebarContainer>
  );
  }
  