
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
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
    border-radius: 26px;
    padding: 30px 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    a {
        color: #fff;
        padding: 8px;
        &.active {
            
            background: #9dabce;
            border-radius: 6px;
        }
    }
`;
  export const Sidebar = () => {
  return (
      <SidebarContainer>
        <NavMenu>
        <Tooltip title="Home">
            <NavLink to='/'>
                <HomeIcon fontSize="medium" />
            </NavLink>
        </Tooltip>
        <Tooltip title="About">
            <NavLink to='/about'>
            <DirectionsBoatIcon fontSize="medium"  />
          </NavLink>
        </Tooltip>
        <Tooltip title="Containers">
            <NavLink  to='/container'>
            <LocalShippingIcon fontSize="medium"  />
          </NavLink>
        </Tooltip>
        <Tooltip title="Vehicles">
                <NavLink to='/vehicles'>
                    <DriveEtaIcon fontSize="medium"  />
                </NavLink>
        </Tooltip>
        </NavMenu>
        
        {/* Bottom menu */}
        <NavMenu>
          <NavLink  to='/profile'>
            <PersonIcon fontSize="medium"  />
          </NavLink>
          <NavLink to='/logout'>
            <LogoutIcon fontSize="medium"  />
          </NavLink>
        </NavMenu>
      </SidebarContainer>
  );
  }
  