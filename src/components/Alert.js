//---------------------- IMPORT -----------------------------
import styled from "styled-components";

//---------------------- COMPONENT --------------------------
const Alert = ({open=false, closeHandler = () => {}, value=null}) => {
    //render
    return open ? (
        <>
        <Container>
            <Title>{value ? null : '필수 항목 미설정'}</Title>
            <Content>
                <TextArea>{value || '“[필수]” 설정 값을 전부 설정해주세요.'}</TextArea>
                <DivideLine />
                <ButtonArea>
                    <ButtonText onClick={closeHandler}>확인</ButtonText>
                </ButtonArea>
            </Content>
        </Container>
        </>
    ) : null
}
export default Alert;

//----------------------- STYLE -----------------------------
const Container = styled.div`
    position: fixed;
    width: 580px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(30, 30, 30);
    border-radius: 12px;
    color:rgb(252, 252, 252);
    left:250px;
    z-index:99;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 24px 0px 20px;
`;
const Content = styled.div`
    width: 500px;
    height: 100%;
    text-align: center;
    position: relative;
    white-space: pre-line;
`;
const TextArea = styled.div`
    font-size: 14px;
`;
const DivideLine = styled.div`
    height: 1px;
    position: absolute;
    bottom: 60px;
    background: rgb(14, 14, 14);
    width: 580px;
    left: -40px;
`;
const ButtonArea = styled.div`
    height: 60px;
    margin-top: 40px;
    color: rgb(159, 159, 159);
    position: relative;
`;
const ButtonText = styled.div`
    display: inline-block;
    margin: 15px 0px;
    padding: 5px;
    cursor: pointer;
    font-weight: 400;
    color: rgb(236, 97, 38);
`;