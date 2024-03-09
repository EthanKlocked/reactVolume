//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { logo } from "assets/images/code";

//---------------------- COMPONENT --------------------------
const Footer = () => {
    //render
    return(
        <Container>
            <Content>
                <SectionHeader>
                    <SectionHeaderImage src={logo}/>
                    <SectionHeaderTail>
                        <SectionHeaderButton>알파파인더</SectionHeaderButton>
                        <SectionHeaderButton>FIRE로 가는 길</SectionHeaderButton>
                        <SectionHeaderButton>채용공고</SectionHeaderButton>
                    </SectionHeaderTail>
                </SectionHeader>
                <SectionInfo>
                    <SectionInfoTitle>주식회사 퀀터스테크놀로지스</SectionInfoTitle>
                    <SectionInfoContent>대표자명: 이재민 ┃ 주소: 서울특별시 강남구 선릉로 93길 54, 6층 6062호 (역삼동, 일환빌딩)</SectionInfoContent>
                    <SectionInfoContent>사업자등록번호: 245-88-02569</SectionInfoContent>
                    <SectionInfoContent>문의: cs@quantus.kr</SectionInfoContent>
                    <SectionInfoContent>비즈니스 관련 문의: 070-4193-5192 (퀀터스 이용문의는 고객지원의 1:1문의, 혹은 메일로 문의주세요.)</SectionInfoContent>
                </SectionInfo>
                <SectionExtra>
                    <SectionExtraAuth>© 2023 Quantus Technologies. All rights reserved.</SectionExtraAuth>
                    <SectionExtraTail>
                        <SectionExtraLink>개인정보처리방침</SectionExtraLink>
                        <SectionExtraLink>이용약관</SectionExtraLink>
                    </SectionExtraTail>
                </SectionExtra>
            </Content>
        </Container>
    )
}
export default Footer;
//----------------------- STYLE -----------------------------
const Container = styled.div`
    display: flex;
    width: 100%;
    background: rgb(0, 0, 0);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top:150px;
`;
const Content = styled.div`
    width: 1020px;
`;
const SectionHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 50px;
`;
const SectionHeaderImage = styled.img`
    width: 191px;
`;
const SectionHeaderTail = styled.div`
    display: flex;
    gap: 32px;
`;
const SectionHeaderButton = styled.button`
    padding: 6px 27px;
    border-radius: 18px;
    border: 1px solid rgb(236, 38, 38);
    background-color: rgb(0, 0, 0);
    color: rgb(252, 252, 252);
    font-weight: 500;
    cursor: pointer;
`;
const SectionInfo = styled.div`
    margin-top: 28px;
`;
const SectionInfoTitle = styled.h2`
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(159, 159, 159);
`;
const SectionInfoContent = styled.p`
    font-size: 14px;
font-weight: 400;
color: rgb(159, 159, 159);
`;
const SectionExtra = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 28px 0px 50px;
`;
const SectionExtraAuth = styled.p`
    margin: 0px;
    font-size: 14px;
    font-weight: 300;
    color: rgb(110, 110, 110);
`;
const SectionExtraTail = styled.div`
    display: flex;
    gap: 32px;
`;
const SectionExtraLink = styled.a`
    color: rgb(110, 110, 110);
    cursor: pointer;
`;