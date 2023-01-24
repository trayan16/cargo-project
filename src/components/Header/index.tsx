import { Grid } from '@mui/material';
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
const HeaderContainer = styled.div`
    border-bottom: 2px solid #ededed;
    padding-bottom: 20px;
    margin-bottom: 20px;
`;
const Date = styled.div`
    font-size: 24px;
    color: #c3c6cb;
    font-weight: 400;
`
const Greeting = styled.div`
    font-size: 36px;
    color: #46494e;
    font-weight: 700;
    text-transform: uppercase;
`
export const Header = (props: any) => {
    return (
      <HeaderContainer>
        <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
                <Date>Wednesday, 12 October</Date>
                <Greeting>Good Morning!</Greeting>
            </Grid>
            <Grid container item sm={12} md={6}>
                <Grid item sm={6} md={4}>Circle</Grid>
                <Grid item sm={6} md={4}>Messages</Grid>
                <Grid item sm={6} md={4}><LocationOnIcon fontSize="large"  /> Chateauguay, QC J6K 0B9</Grid>
            </Grid>
        </Grid>
      </HeaderContainer>
    );
};
