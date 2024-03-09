//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { durationAtom } from "global/global_data";
import { useRecoilState } from "recoil";
import { timeToText } from "global/library";
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import { useState, useLayoutEffect } from "react";

//---------------------- COMPONENT --------------------------
const Term = () => {
    //data
    const [duration, setDuration] = useRecoilState(durationAtom);
    const [startOpen, setStartOpen] = useState(false);
    const [endOpen, setEndOpen] = useState(false);

    //function
    const updateDuration = (data) => {
        setDuration({...duration, ...data})
    }

    //effect
    useLayoutEffect(() => {
        setStartOpen(false);
        setEndOpen(false);
    }, [duration]);

    //render
    return(
        <Section>
            <SectionTitle>
                <SectionTitleHighlight>[필수] </SectionTitleHighlight>
                기간 설정
            </SectionTitle>
            <SectionContent>
                <SectionItem>
                    <SectionItemLabel>시작일 설정</SectionItemLabel>
                    <SectionItemInputBox>
                        <SectionItemInput value={duration.start || '2003.01.01'} onChange={() => {}}/>
                        <SectionItemInputTail onClick={() => setStartOpen(!startOpen)}>
                            <SectionItemInputTailBox>
                                <SectionItemInputTailImg src='https://www.quantus.kr/static/media/calender.c17c5c3037c8c21f0df789a81fe18c02.svg'/>
                            </SectionItemInputTailBox>
                        </SectionItemInputTail>
                    </SectionItemInputBox>
                    {
                        startOpen ? (
                            <StyledCalendar
                                formatDay={(locale, date) => dayjs(date).format("D")}
                                showNeighboringMonth={false}
                                next2Label={false}
                                prev2Label={false}
                                onChange={(v) => updateDuration({start: timeToText(v, 'y.mm.dd')})}
                                //defaultValue={new Date(duration.start || '2003.01.01')}
                                value={new Date(duration.start || '2003.01.01')}
                            />
                        ) : null
                    }
                </SectionItem>
                <SectionItem>
                    <SectionItemLabel>종료일 설정</SectionItemLabel>
                    <SectionItemInputBox>
                        <SectionItemInput value={duration.end || timeToText(new Date(), 'y.mm.dd')} onChange={() => {}}/>
                        <SectionItemInputTail onClick={() => setEndOpen(!endOpen)}>
                            <SectionItemInputTailBox>
                                <SectionItemInputTailImg src='https://www.quantus.kr/static/media/calender.c17c5c3037c8c21f0df789a81fe18c02.svg'/>
                            </SectionItemInputTailBox>
                        </SectionItemInputTail>                    
                    </SectionItemInputBox>                    
                    {
                        endOpen ? (
                            <StyledCalendar
                                formatDay={(locale, date) => dayjs(date).format("D")}
                                showNeighboringMonth={false}                    
                                next2Label={false}
                                prev2Label={false}
                                onChange={(v) => updateDuration({end: timeToText(v, 'y.mm.dd')})}
                                //defaultValue={duration.end ? new Date(duration.end) : new Date()}
                                value={duration.end ? new Date(duration.end) : new Date()}
                            />
                        ) : null
                    }                    
                </SectionItem>                
            </SectionContent>
        </Section>
    )
}
export default Term;

//----------------------- STYLE -----------------------------
const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    top:120px;
`;
const SectionTitle = styled.h2`
    margin: 0px 0px 28px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
const SectionTitleHighlight = styled.span`
    font-weight: 700;
    color: rgb(236, 97, 38);
`;
const SectionContent = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const SectionItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 386px;
    position: relative;
`;
const SectionItemLabel = styled.label`
    width: fit-content;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 18px;
`;
const SectionItemInputBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 46px;
`;
const SectionItemInput = styled.input`
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
`;
const SectionItemInputTail = styled.div`
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
const SectionItemInputTailBox = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 2px;
    margin-right: -11px;
    width: 36px;
    height: 36px;
    flex-direction: row-reverse;
    border-radius: 50%;
    cursor: pointer;
`;
const SectionItemInputTailImg = styled.img`
    box-sizing: border-box;
    margin-right: 0px;
    margin-left: 0px;
`;
const StyledCalendar = styled(Calendar)`
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 97px;
    z-index: 2;
    background: rgb(37, 37, 37);
    border: 1px solid rgb(62, 62, 62);
    border-radius: 6px;
    padding: 14px;

    .react-calendar__tile--now {
        background: rgb(37, 37, 37);
        color: black;
    };
    .react-calendar__navigation__label > span {
        font-size: 20px;
        font-weight: ;
        color: #fff;
    }
    .react-calendar__navigation__arrow{
        font-size: 30px;
        color: #fff;
    }
    .react-calendar__navigation > button:enabled:hover{
        background:none; 
    }
    .react-calendar__navigation > button:enabled:focus{
        background:none; 
    }
    .react-calendar__month-view__weekdays {
        abbr { /*월,화,수... 글자 부분*/
            font-size: 0.75em;
            font-weight: 700;
            color: rgb(159, 159, 159);
            height: 40px;
            padding: 0px;
            text-align: center;
            text-transform: uppercase;
            vertical-align: middle;
            text-decoration: none;
        }
    }
    .react-calendar__tile {
        height: 40px;
        width: 40px;
        padding: 0px 0px 2px;
        text-align: center;
        border-radius: 9999px;
        color: rgb(159, 159, 159);
        cursor: pointer;
        background: none;
        font-weight: inherit;
    }
    .react-calendar__tile:enabled:hover{
        background-color: #555;
        border-radius: 9999px;
    }, 
    .react-calendar__tile:enabled:focus, .react-calendar__tile--active {
        height: 40px;
        width: 40px;
        padding: 0px 0px 2px;
        text-align: center;
        border-radius: 9999px;
        color: rgb(159, 159, 159);
        cursor: pointer;
        background: rgba(236, 97, 38, 0.5);
        font-weight: 700;
    }
`;
  