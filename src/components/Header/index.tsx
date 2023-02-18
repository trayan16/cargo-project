import { Grid } from '@mui/material';
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
const HeaderContainer = styled.div`
    
    border-bottom: 2px solid #ededed;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .header-action-items {
        color: #033090;
        div + div {
            border-left: 1px solid;
        }
    }
    span {
        background-color: red;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        justify-content: center;
        padding: 5px;
        display: flex;
        align-items: center;
        color: #fff;
        position: absolute;
        right: 16px;
        top: -7px;
    }
`;
const DateContainer = styled.div`
    font-size: 24px;
    color: ${({ theme }) => theme.textColor};
    font-weight: 400;
`
const Greeting = styled.div`
    font-size: 36px;
    color: #033090;
    font-weight: 700;
    text-transform: uppercase;
`
const ProfileName = styled.section`
`;
const ProfileRole = styled.section`
`;
export const Header = (props: any) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    return (
      <HeaderContainer>
        <Grid justifyContent="space-between" container spacing={4}>
            <Grid item sm={12} md={6}>
                <DateContainer>{today.toLocaleDateString("en-US", options)}</DateContainer>
                <Greeting>Good Morning!</Greeting>
            </Grid>
            <Grid className='header-action-items' alignItems="center" style={{display: "flex"}}  container item sm={12} md={6}>
                <Grid textAlign="right" style={{paddingRight: 10}} item sm={6} md={5}>
                    <ProfileName>Tsvetan Mitev</ProfileName>
                    <ProfileRole>Manager</ProfileRole>
                </Grid>
                <Grid item sm={6} md={2} justifyContent="center" display="flex" position="relative">
                    <MessageIcon fontSize="large"  />
                    <span>2</span>
                </Grid>
                <Grid alignItems="center" style={{display: "flex"}}  item sm={6} md={5}><LocationOnIcon  fontSize="large"  /> Chateauguay</Grid>
            </Grid>
        </Grid>
      </HeaderContainer>
    );
};
