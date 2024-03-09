//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import StickyHeader from "components/StickyHeader";
import Setting from "components/Setting";
import Asset from "components/Asset";
import Timing from "components/Timing";
import Term from "components/Term";
import Submit from "components/Submit";

//---------------------- COMPONENT --------------------------
const Allocation = () => {
    //render
    return(
        <Container>
            <StickyHeader/>
            <Body>
                <InfoSection>
                    <Setting/>
                    <Asset />
                    <Timing />
                </InfoSection>
                <TermSection>
                    <Term/>
                </TermSection>
                <Submit/>
            </Body>
        </Container>
    )
}
export default Allocation;

//----------------------- STYLE -----------------------------
const Container = styled.div`
    width:1020px;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 836px;
    width: 100%;
`;
const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 836px;
    width: 100%;
`;
const TermSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 110px;
`;
const ButtonSection = styled.div`
    display: flex;
    gap: 64px;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: end;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 110px;
`;
const TestButton = styled.button`
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    border-radius: 6px;
    position: relative;
    font-family: "Noto Sans KR", sans-serif;
    overflow: hidden;
    color: rgb(14, 14, 14);
    background-image: linear-gradient(to right, rgb(236, 97, 38), rgb(236, 38, 38));
    border: none;
    font-size: 18px;
    font-weight: 600;
    height: 53px;
    width: 210px;
`;