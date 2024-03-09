//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { 
    nameAtom,
    settingAtom,
    timingAtom,
    timingSetAtom,
    durationAtom,
    testVolumeAtom,
    orderAtom, 
    listSelector
} from "global/global_data";
import { animateScroll as scroll } from "react-scroll";
import Alert from "./Alert";
import { useState } from "react";

//---------------------- COMPONENT --------------------------
const StickyHeader = () => {
    //state
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState(null);

    //data
    const [name, setName] = useRecoilState(nameAtom);
    const [test, setTest] = useRecoilState(testVolumeAtom);
    const setting = useRecoilValue(settingAtom);

    //reset
    const nameReset = useResetRecoilState(nameAtom);
    const settingReset = useResetRecoilState(settingAtom);
    const listOrderReset = useResetRecoilState(orderAtom);
    const timingReset = useResetRecoilState(timingAtom);
    const timingSetReset = useResetRecoilState(timingSetAtom);
    const durationReset = useResetRecoilState(durationAtom);
    const testReset = useResetRecoilState(testVolumeAtom);
    const [getList, resetList] = useRecoilState(listSelector);

    //function
    const changeName = e => {
        setName(e.target.value);
    };

    const save = () => {
        if(!name) return;
        if(!setting.invest || !setting.term || !setting.band) return setAlertOpen(true);
        setTest([...test, name]);
        setAlertMsg("저장되었습니다.");
        setAlertOpen(true);
    }

    const resetAll = () => {
        nameReset();
        settingReset();
        resetList();
        listOrderReset();
        timingReset();
        timingSetReset();
        durationReset();
        testReset();
    }

    //render
    return(
        <>
        <Header>
            <HeaderContent>
                <HeaderInputBox>
                    <HeaderInput 
                        type="text" 
                        placeholder="전략 이름을 입력해주세요." 
                        maxLength="30"
                        autoComplete="off"
                        value={name}
                        onChange={changeName}
                    />
                </HeaderInputBox>
                <HeaderSaveButton active={name} onClick={save}>저장</HeaderSaveButton>
                <HeaderBottomButton onClick={() => scroll.scrollTo(950, {duration: 500,smooth: true})}>하단으로 이동</HeaderBottomButton>
            </HeaderContent>
            <HeaderReset>
                <HeaderResetContent>
                    <HeaderResetBox onClick={resetAll}>
                        <HeaderResetImageBox>
                            <img src="https://www.quantus.kr/static/media/reset.c583168b8c7b6e9b10892a3c70674e59.svg" alt="resetIcon"/>
                        </HeaderResetImageBox>
                        설정 값 초기화
                    </HeaderResetBox>
                </HeaderResetContent>
            </HeaderReset>            
        </Header>
        <Alert 
            open={alertOpen} 
            closeHandler={() => {
                setAlertMsg(null);
                setAlertOpen(false);
            }} 
            value={alertMsg}
        />
        </>
    )
}
export default StickyHeader;

//----------------------- STYLE -----------------------------
const Header = styled.div`
    height: 102px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(14, 14, 14);
    position: sticky;
    top: 183px;
    z-index: 98;
    margin-bottom: 50px;
`;
const HeaderContent = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const HeaderInputBox = styled.div`
    border-bottom: 2px solid rgb(255, 255, 255);
`;
const HeaderInput = styled.input`
    width: 695px;
    height: 36px;
    background: none;
    border: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    box-sizing: border-box;
    &::placeholder{
		color: rgb(255, 255, 255);
	}
`;
const HeaderSaveButton = styled.button`
    cursor: default;
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
    color: rgb(62, 62, 62);
    background-color: rgb(14, 14, 14);
    border: 1px solid rgb(62, 62, 62);
    font-size: 16px;
    height: 42px;
    width: 109px;
    font-weight: 300;
    ${props => props.active ? 
        'color: rgb(255, 255, 255); border: 1px solid rgb(236, 97, 38);cursor: pointer;' : 
        null
    }
`;
const HeaderBottomButton = styled.button`
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
    background-color: rgb(236, 97, 38);
    border: none;
    font-size: 16px;
    font-weight: 400;
    height: 42px;
    width: 152px;
`;
const HeaderReset = styled.div`
    position: absolute;
    top: 100px;
    right: 0px;
    height: 100%;
`;
const HeaderResetContent = styled.div`
    position: sticky;
    display: flex;
    flex-flow: column wrap;
    gap: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 152px;
    height: 48px;
    top: 343px;
    border: 1px solid rgb(62, 62, 62);
    border-radius: 6px;
    background-color: rgb(14, 14, 14);
    z-index: 0;
`;
const HeaderResetBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    color: rgb(255, 255, 255);
    border: none;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
`;
const HeaderResetImageBox = styled.div`
    margin-right:8px;
`;