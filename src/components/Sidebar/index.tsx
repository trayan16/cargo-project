
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Themes } from '../../App';
import { useContext } from 'react';
import { WindowContext } from '../../context/WindowContextProvider';
import { mobileVersionWidth } from '../../utils';
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 20px;
    white-space: nowrap;
    @media screen and (max-width: ${mobileVersionWidth}px) {
        flex-direction:row;
        gap: 17px; 
    }
`;
const SidebarContainer = styled.section`
    width: 70px;
    background-image: linear-gradient(to top,#1d1e20,#043bc7);
    border-radius: 26px;
    padding: 30px 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media screen and (max-width: ${mobileVersionWidth}px) {
      border-radius: 0;
      position: sticky;
      top: 0;
      z-index: 9999;
      width: 100%;
    }
    a {
        color: #fff;
        padding: 8px;
        &.active {
            
            background: #9dabce;
            border-radius: 6px;
        }
    }
`;
  interface SidebarProps {
    themeToggler: () => void;
    theme: string;
  }
  export const Sidebar: React.FC<SidebarProps> = ({themeToggler, theme}) => {
  const { clientWidth } = useContext(WindowContext);
  console.log(clientWidth, "WIDTH")
  const renderTopMenu = () => {
    return (
      <NavMenu>
        <Tooltip title="Home">
          <NavLink to='/'>
              <HomeIcon fontSize="medium" />
          </NavLink>
        </Tooltip>
        <Tooltip title="Containers">
          <NavLink to='/about'>
            <DirectionsBoatIcon fontSize="medium"  />
          </NavLink>
        </Tooltip>
        <Tooltip title="Trucks">
          <NavLink  to='/container'>
            <LocalShippingIcon fontSize="medium"  />
          </NavLink>
        </Tooltip>
        <Tooltip title="Vehicles">
          <NavLink to='/vehicles'>
              <DriveEtaIcon fontSize="medium"  />
          </NavLink>
        </Tooltip>
        {clientWidth < mobileVersionWidth && (
          <>
            <Tooltip style={{ cursor: 'pointer' }} onClick={themeToggler} title="Toggle dark mode">
              {theme === Themes.LIGHT ? <DarkModeIcon style={{ color: '#fff' }} fontSize="medium" /> : <LightModeIcon style={{ color: '#fff' }} fontSize="medium" />}
            </Tooltip>
            <NavLink to='/profile'>
              <PersonIcon fontSize="medium" />
            </NavLink><NavLink to='/logout'>
              <LogoutIcon fontSize="medium" />
            </NavLink>
          </>
        )}
      </NavMenu>
    )
  }
  const renderBottomMenu = () => {
    return (
      <NavMenu style={{ cursor: 'pointer' }}>
          <Tooltip title="Settings">
            <NavLink  to='/Settings'>
              <SettingsIcon fontSize="medium" />
            </NavLink>
          </Tooltip>
          <Tooltip style={{ cursor: 'pointer' }} onClick={themeToggler} title="Toggle dark mode">
            {theme === Themes.LIGHT ? <DarkModeIcon style={{ color: '#fff' }} fontSize="medium" /> : <LightModeIcon style={{ color: '#fff' }} fontSize="medium" />}
          </Tooltip>
          <Tooltip title="Profile">
            <NavLink  to='/profile'>
              <PersonIcon fontSize="medium"  />
            </NavLink>
          </Tooltip>
          <NavLink to='/logout'>
            <LogoutIcon fontSize="medium"  />
          </NavLink>
      </NavMenu>
    )
  }
  return (
      <SidebarContainer>
        {renderTopMenu()}
        
        {/* Bottom menu */}
        {clientWidth > mobileVersionWidth && renderBottomMenu()}
      </SidebarContainer>
  );
  }
  