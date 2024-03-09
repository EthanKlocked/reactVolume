//---------------------- IMPORT -----------------------------
import styled from "styled-components";
//---------------------- COMPONENT --------------------------
const Promotion = () => {
    //render
    return(
        <Container>
            <Content>
                <Text>
                    퀀터스 설날 프로모션! (많관부)
                </Text>
                <img alt="link" src="https://www.quantus.kr/static/media/bannerClick.fddcebe1e55feacf35c7ffb413be7bd2.svg"></img>
            </Content>
        </Container>
    )
}
export default Promotion;
//----------------------- STYLE -----------------------------
const Container = styled.div`
    display:flex;
    width: 100%;
    min-width: 1020px;
    height: 44px;
    z-index: 2;
    background: rgb(236, 38, 38);
    justify-content:center;
    align-items:center;
`;
const Content = styled.div`
    width:1020px;
    color: rgb(14, 14, 14);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`;
const Text = styled.span`
    margin-right:10px;
`;