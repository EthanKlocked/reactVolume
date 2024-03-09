//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { logo } from "assets/images/code";
//---------------------- COMPONENT --------------------------
const Header = () => {
    //render
    return(
        <Container>
            <Content>
                <Logo src={logo} />
                <Banner />
                <Info>
                    <Level>고급</Level>                
                    <Welcome>0y08bv님 환영합니다!</Welcome>
                    <Percentage>100%</Percentage>
                </Info>
            </Content>
        </Container>
    )
}
export default Header;
//----------------------- STYLE -----------------------------
const Container = styled.div`
    display: flex;
    width:100%;
    justify-content:center;
    border-bottom: 1px solid rgb(30, 30, 30);
    background: rgb(14, 14, 14);
    position: sticky;
    z-index: 98;
`;
const Content = styled.div`
    display: flex;
    width: 1020px;
    height:85px;
    justify-content: space-between;
    align-items:center;
`;
const Logo = styled.img`
    width: 191px;
    height: 37px;
`;
const Banner = styled.div`
    width:400px;
`;
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;
const Level = styled.div`
    padding: 0px 8px;
    display: inline-flex;
    background: rgb(236, 38, 38);  
    min-width: 40px;
    height: 18px;
    font-weight: 500;
    font-size: 12px;
    color: rgb(14, 14, 14);
    align-items: center;
    justify-content: center;
`;
const Welcome = styled.div`
    width: 151px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 8px;
    font-size: 14px;
    color: rgb(252, 252, 252);
`;
const Percentage = styled.div`
    font-size:14px;
    color:white;
    border:2px solid white;
    padding:15px 6px;
    border-radius:50%;
    font-weight:bold;
    margin-left: 40px;
`;