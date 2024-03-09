//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { settingAtom } from "global/global_data";
import { intFilter } from "global/library";
import useRebalnce from "query/useRebalance";
import { useState } from "react";

//---------------------- COMPONENT --------------------------
const Setting = () => {
    //data
    const [setting, setSetting] = useRecoilState(settingAtom);

    //state
    const [selectOpen, setSelectOpen] = useState(false);

    //function
    const [rebalance] = useRebalnce();
    const updateSetting = (obj) => {
        setSetting({...setting, ...obj});
    }

    //render
    return(
        <>
            <Title>
                <TitleSpan>[필수]</TitleSpan>
                자산배분 설정
            </Title>
            <Section>
                <SectionLabel>자산배분 알고리즘</SectionLabel>
                <SectionContent>
                    <SectionBox>
                        <SectionItem>{setting.algorithm}</SectionItem>
                        <SectionTailIcon>
                            <SectionTailIconImage src='https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg'/>
                        </SectionTailIcon>
                    </SectionBox>
                </SectionContent>
            </Section>
            <Section>
                <SectionLabel>초기 투자 금액</SectionLabel>
                <SectionInputBox>                    
                    <SectionInput 
                        type="text" 
                        placeholder="초기 투자 금액을 입력해주세요." 
                        autoComplete="off"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = "초기 투자 금액을 입력해주세요."}
                        onChange={(e) => {updateSetting({invest: intFilter(e)})}}
                        value={setting.invest}
                    />
                    <SectionInputTail>만원</SectionInputTail>
                </SectionInputBox>
            </Section>
            <Section>
                <SectionLabel>주기 리밸런싱</SectionLabel>
                <SectionContent>
                    <SectionBox onClick={() => setSelectOpen(!selectOpen)} selected={selectOpen}>
                        <SectionItem>{setting.term || '주기 리밸런싱을 선택해주세요.'}</SectionItem>
                        <SectionTailIcon>
                            <SectionTailIconImage 
                                src='https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg'
                                rotation={selectOpen ? 180 : 0}
                            />
                        </SectionTailIcon>                        
                    </SectionBox>
                    {
                        selectOpen ? (
                            <SelectBox>
                            {   
                                rebalance.map((v, k) => (
                                    <SelectBoxItem 
                                        key={k}
                                        onClick={() => {
                                            updateSetting({term: v});
                                            setSelectOpen(false);
                                        }}
                                        selected={setting.term == v}
                                    >
                                        {v}
                                    </SelectBoxItem>
                                ))
                            }
                            </SelectBox>
                        ) : null
                    }
                </SectionContent>
            </Section>
            <Section>
                <SectionLabel>밴드 리밸런싱</SectionLabel>
                <SectionInputBox>                    
                    <SectionInput 
                        type="text" 
                        placeholder="밴드 리밸런싱 기준을 입력해주세요." 
                        autoComplete="off"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = "밴드 리밸런싱 기준을 입력해주세요"}
                        onChange={(e) => {updateSetting({band: intFilter(e, 100)})}}
                        value={setting.band}
                    />
                    <SectionInputTail>%</SectionInputTail>
                </SectionInputBox>
                <SectionComment>0 ~ 100까지 입력할 수 있습니다. (0 입력시 비활성화)</SectionComment>
            </Section>
            <CheckBoxSection>
                <CheckBoxlabel>
                    <CheckBoxInput type="checkbox" disabled/>
                    <CheckBoxImage src="https://www.quantus.kr/static/media/checkBoxDefault.c07524e01b9d604f81a0269a5fd614f0.svg"/>
                    <CheckBoxSpan>전체 환율 반영</CheckBoxSpan>
                </CheckBoxlabel>
            </CheckBoxSection>
        </>
    )
}
export default Setting;

//----------------------- STYLE -----------------------------
const Title = styled.h2`
    margin: 0px 0px 28px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
const TitleSpan = styled.span`
    font-weight: 700;
    color: rgb(236, 97, 38);
`;
const Section = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 16px;
    gap: 18px;
    margin-bottom: 38px;
`;
const SectionLabel = styled.label`
    width: fit-content;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 300;
`;
const SectionContent = styled.div`
    width: 100%;
    position: relative;
`;
const SectionBox = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 46px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid rgb(159, 159, 159);
    cursor: pointer;
    ${props => props.selected ? 'border-color: rgb(236, 97, 38)' : null}
`;
const SectionItem = styled.div`
    height: 36px;
    line-height: 36px;
    text-shadow: none;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    border-radius: 6px;
    color: rgb(255, 255, 255);
`;
const SectionInputBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 46px;
`;
const SectionInput = styled.input`
    height: 46px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(14, 14, 14);
    border: 1px solid rgb(159, 159, 159);
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(230, 230, 230);
    cursor: text;
    font-weight: 300;
    &::placeholder{
        color:white;
    }
    &:focus {
        outline: none;
        border-color: rgb(236, 97, 38);
    }
`;
const SectionInputTail = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 46px;
    position: absolute;
    right: 28px;
    color: rgb(230, 230, 230);
    font-size: 16px;
`;
const SectionTailIcon = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: 28px;
    height: 48px;
`;
const SectionTailIconImage = styled.img`
    transform: rotate(${props => props.rotation}deg);
    padding-top: 1px;
`;
const SectionComment = styled.p`
    color: rgb(159, 159, 159);
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 0px;
`;
const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-height: 500px;
    position: absolute;
    border-radius: 5px;
    border: 1px solid rgb(62, 62, 62);
    background: rgb(14, 14, 14);
    z-index: 2;
    overflow: hidden auto;
    top: 55px;
`;
const SelectBoxItem = styled.div`
    height: 36px;
    line-height: 36px;
    text-shadow: none;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    background : ${props => props.selected ? "rgba(236, 97, 38, 0.3)" : null} !important;
    &:hover{
        background:#222;
    }  
`;
const CheckBoxSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    margin-top: 50px;
`;
const CheckBoxlabel =styled.label`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 140px;
    width: fit-content;
    cursor: default;
    font-size: 16px;
    font-weight: 700;
    color: rgb(255, 255, 255);
`;
const CheckBoxInput =styled.input`
    position: absolute;
    opacity: 0;
    width: 0px;
    height: 0px;
`;
const CheckBoxImage =styled.img`
    margin-right: 10px;
`;
const CheckBoxSpan =styled.span`
`;