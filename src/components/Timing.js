
//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { timingAtom, timingSetAtom } from "global/global_data";
import { intFilter } from "global/library";

//---------------------- COMPONENT --------------------------
export default () => {
    //data
    const [timing, setTiming] = useRecoilState(timingAtom);
    const [setting, setSetting] = useRecoilState(timingSetAtom);

    //function
    const updateSetting = (v) => {
        setSetting({...setting, ...v});
    }

    //render
    return (
        <Section>
            <SectionTitle>마켓 타이밍 설정</SectionTitle>
            <SectionContent>
                <SectionItem>
                    <SectionItemLabel>
                        <SectionItemInput />
                        <SectionItemImage src='https://www.quantus.kr/static/media/checkBoxDefault.c07524e01b9d604f81a0269a5fd614f0.svg'/>
                        <SectionItemText>매크로 마켓 타이밍</SectionItemText>
                        <SectionItemIconBox>
                            <SectionItemIcon />
                        </SectionItemIconBox>
                    </SectionItemLabel>
                </SectionItem>
                <SectionItem>
                    <SectionItemLabel style={{color:'white', cursor:'pointer'}}>
                        <SectionItemInput onClick={() => setTiming(!timing)}/>
                        <SectionItemImage 
                            src={timing ? 
                                'https://www.quantus.kr/static/media/clickCheckBox.eb67ac97b1bde3053a63997d27658439.svg' : 
                                'https://www.quantus.kr/static/media/factorNoneClick.a12b9ff853812d16937c82b587503967.svg'
                            }
                        />                        
                        <SectionItemText>재진입 마켓 타이밍</SectionItemText>                        
                        <SectionItemIconBox>
                            <SectionItemIcon />
                        </SectionItemIconBox>                        
                    </SectionItemLabel>                                    
                </SectionItem>                
            </SectionContent>
            {
                timing ? (
                        <>
                        <ExtraRow>
                        <ExtraRowLabel>전략 이동평균선 기간</ExtraRowLabel>
                        <ExtraRowfield>
                            <ExtraRowfieldItem>
                                <ExtraRowfieldSubLabel>
                                    <ExtraRowfieldImage src={
                                        setting.way=='SMA'? 
                                            'https://www.quantus.kr/static/media/radio_on.a973687999036c41a3a8ec30eab9c6fe.svg' : 
                                            'https://www.quantus.kr/static/media/radio_off.b95fe567edf37977cf315dbed34b96b4.svg'
                                        }
                                    />
                                    <ExtraRowfieldInput type='radio' onClick={() => updateSetting({way:"SMA"})}/>
                                    <ExtraRowfieldSpan>SMA</ExtraRowfieldSpan>
                                </ExtraRowfieldSubLabel>
                                <ExtraRowfieldTail>
                                    <ExtraRowfieldTailIcon/>
                                </ExtraRowfieldTail>                        
                            </ExtraRowfieldItem>
                            <ExtraRowfieldItem>
                                <ExtraRowfieldSubLabel>
                                    <ExtraRowfieldImage src={
                                        setting.way=='EMA'? 
                                            'https://www.quantus.kr/static/media/radio_on.a973687999036c41a3a8ec30eab9c6fe.svg' : 
                                            'https://www.quantus.kr/static/media/radio_off.b95fe567edf37977cf315dbed34b96b4.svg'
                                        }
                                    />
                                    <ExtraRowfieldInput type='radio' onClick={() => updateSetting({way:"EMA"})}/>
                                    <ExtraRowfieldSpan>EMA</ExtraRowfieldSpan>
                                </ExtraRowfieldSubLabel>
                                <ExtraRowfieldTail>
                                    <ExtraRowfieldTailIcon/>
                                </ExtraRowfieldTail>                                                
                            </ExtraRowfieldItem>
                            <ExtraRowfieldItem>
                                <ExtraRowfieldSubLabel>
                                    <ExtraRowfieldImage src={
                                        setting.way=='HMA'? 
                                            'https://www.quantus.kr/static/media/radio_on.a973687999036c41a3a8ec30eab9c6fe.svg' : 
                                            'https://www.quantus.kr/static/media/radio_off.b95fe567edf37977cf315dbed34b96b4.svg'
                                        }
                                    />
                                    <ExtraRowfieldInput type='radio' onClick={() => updateSetting({way:"HMA"})}/>
                                    <ExtraRowfieldSpan>HMA</ExtraRowfieldSpan>
                                </ExtraRowfieldSubLabel>
                                <ExtraRowfieldTail>
                                    <ExtraRowfieldTailIcon/>
                                </ExtraRowfieldTail>                                            
                            </ExtraRowfieldItem>                                        
                        </ExtraRowfield>
                    </ExtraRow>   
                    <ExtraInputRow>
                        <ExtraInputRowLabel>전략 이동평균선 기간</ExtraInputRowLabel>
                        <ExtraInputRowBox>
                            <ExtraInputRowInput 
                                type='text'
                                onChange={(e) => {updateSetting({term: intFilter(e, 200, 5)})}}
                                value={setting.term || "100"}                            
                            />
                            <ExtraInputRowInputTail >일</ExtraInputRowInputTail>
                        </ExtraInputRowBox>
                        <ExtraInputRowInputComment>5 ~ 200까지 입력할 수 있습니다.</ExtraInputRowInputComment>
                    </ExtraInputRow>       
                    <ExtraInputRow>
                        <ExtraInputRowLabel>매수 이격도 기준</ExtraInputRowLabel>
                        <ExtraInputRowBox>
                            <ExtraInputRowInput 
                                type='text'
                                onChange={(e) => {updateSetting({buy: intFilter(e)})}}
                                value={setting.buy || '100'}                            
                            />
                        </ExtraInputRowBox>
                    </ExtraInputRow>       
                    <ExtraInputRow>
                        <ExtraInputRowLabel>매도 이격도 기준</ExtraInputRowLabel>
                        <ExtraInputRowBox>
                            <ExtraInputRowInput 
                                type='text'
                                onChange={(e) => {updateSetting({sell: intFilter(e)})}}
                                value={setting.sell || '100'}                                                        
                            />
                        </ExtraInputRowBox>
                    </ExtraInputRow>                                                         
                    </>
                ) : null
            }
        </Section>      
    )
}

//----------------------- STYLE -----------------------------
const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;
const SectionTitle = styled.h2`
    margin: 0px 0px 18px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
const SectionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    width: 100%;
`;
const SectionItem = styled.div`
    display: inline-block;
    height: 24px;
    margin-bottom: 0px;
`;
const SectionItemLabel = styled.label`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 140px;
    width: fit-content;
    cursor: default;
    font-size: 16px;
    font-weight: 300;
    color: rgb(110, 110, 110);
`;
const SectionItemInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0px;
    height: 0px;
`;
const SectionItemImage = styled.img`
    margin-right: 10px;
`;
const SectionItemText = styled.span`
`;
const SectionItemIconBox = styled.div`
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-left: 5px;
    z-index: 1;
    cursor: pointer;
`;
const SectionItemIcon = styled.i`
    display: inline-block;
    background: url(https://www.quantus.kr/static/media/tooltip.1954d30e191d9eeb4a286fd9086f9e45.svg
    ) 0px 0px no-repeat;
    width: 14px;
    height: 14px;
    margin-top: 2px;
    cursor: pointer;
`;
const ExtraRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin: 34px 0px 0px
`;
const ExtraRowLabel = styled.label`
    width: fit-content;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 300;
`;
const ExtraRowfield = styled.fieldset`
    display: flex;
    padding: 0px;
    gap: 68px;
    border: none;
`;
const ExtraRowfieldItem = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`; 
const ExtraRowfieldSubLabel = styled.label`
    display: flex;
    -webkit-box-align: end;
    align-items: end;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: rgb(255, 255, 255);
`; 
const ExtraRowfieldImage = styled.img`
    width: 20px;
    height: 20px;
`;
const ExtraRowfieldInput = styled.input`
    vertical-align: middle;
    appearance: none;
`;
const ExtraRowfieldSpan = styled.span`
    color: rgb(255, 255, 255);
`;
const ExtraRowfieldTail = styled.div`
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-left: 5px;
    z-index: 1;
    cursor: pointer;
`;
const ExtraRowfieldTailIcon = styled.i`
    display: inline-block;
    background: url(https://www.quantus.kr/static/media/tooltip.1954d30e191d9eeb4a286fd9086f9e45.svg
    ) 0px 0px no-repeat;
    width: 14px;
    height: 14px;
    margin-top: 2px;
    cursor: pointer;
`;
const ExtraInputRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    margin-top: 38px;
`;
const ExtraInputRowLabel = styled.div`
    width: fit-content;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 18px;
`;
const ExtraInputRowBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 46px;
`;
const ExtraInputRowInput = styled.input`
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
    &:focus {
        outline: none;
        border-color: rgb(236, 97, 38);
    }        
`;
const ExtraInputRowInputTail = styled.div`
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
const ExtraInputRowInputComment = styled.p`
    color: rgb(159, 159, 159);
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 0px;
`;
