//---------------------- IMPORT -----------------------------
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header";
import Menu from "components/Menu";
import Promotion from "components/Promotion";
import Footer from "components/Footer";

//---------------------- COMPONENT --------------------------
const Main = () => {
    //render
    return(
        <Container>
            <Top>
                <Promotion />
                <Header />
                <Menu />
            </Top>
            <Body>
                <Outlet />
            </Body>
            <Footer />
        </Container>
    )
}
export default Main;

//----------------------- STYLE -----------------------------
const Container = styled.div`
    min-width: 1020px;
`;
const Top = styled.div`
    position:sticky;
    z-index:98;
    top:0;
`;
const Body = styled.div`
    display: flex;
    justify-content:center;
`;