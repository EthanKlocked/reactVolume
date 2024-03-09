//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import Alert from "./Alert";
import { useState, useMemo, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { 
    nameAtom,
    settingAtom,
} from "global/global_data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

//---------------------- COMPONENT --------------------------
const Submit = () => {
    //state
    const [open, setOpen] = useState(false);
    const [progress, setprogress] = useState(0);
    const [loadWidth, setLoadWidth] = useState(2);

    //data
    const name = useRecoilValue(nameAtom);
    const setting = useRecoilValue(settingAtom);

    //function
    const backTestStart = () => {
        if(!name) return setOpen(true);
        if(!setting.invest || !setting.term || !setting.band) return setOpen(true);
        if(progress == 0) setprogress(progress+1);
    }

    //memo
    const loadingUi = useMemo(() => {
        return progress ? (
            <LoadingBar>
                {
                    progress == 1 ? (
                        <LoadingBarText>
                            대기중...
                            <FontAwesomeIcon icon={faSpinner} spin style={{marginLeft:8}}/>
                        </LoadingBarText>
                    ) : null
                }
                {
                    progress ==2 ? <LoadingBarAnimation w={loadWidth}/> : null
                }
                {
                    progress == 3 ? (
                        <LoadingBarText>
                            생성중...
                            <FontAwesomeIcon icon={faSpinner} spin style={{marginLeft:8}}/>
                        </LoadingBarText>                        
                    ) : null
                }
            </LoadingBar>
        ) : null
    }, [progress, loadWidth]);

    //effect
    useEffect(() => {
        if(progress == 1){
            setTimeout(() => {
                setprogress(2);
            }, 3000);
        }
        if(progress == 2){
            const interval = setInterval(() => {
                setLoadWidth(Math.floor(Math.random() * 101));
            }, 800);

            setTimeout(() => {
                clearInterval(interval);
                setprogress(3);
                setLoadWidth(2);
            }, 7000);
        }
        if(progress == 3){
            setTimeout(() => {
                setprogress(0);
            }, 2000);
        }        
    }, [progress])

    //render
    return(
        <>
        <ButtonSection>
            <TestButton>포트 추출</TestButton>
            <TestButton onClick={backTestStart} style={{position:'relative'}}>
                백테스트
                {loadingUi}
            </TestButton>
        </ButtonSection>
        <Alert open={open} closeHandler={() => setOpen(false)}/>
        </>
    )
}
export default Submit;

//----------------------- STYLE -----------------------------
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
const LoadingBar = styled.div`
    background: rgb(14, 14, 14);
    height:51px;
    width:208px;
    border-radius: 6px;
    position:absolute;  
`;
const LoadingBarText = styled.div`
    color:white;
    font-size:14px;
    font-weight:normal;
    line-height:49px;
`;
const LoadingBarAnimation = styled.div`
    height:100%;
    background: rgb(236, 38, 38);
    transition: width 1.5s ease;
    width: ${({ w }) => w}%;
    border-radius: 6px;
`;