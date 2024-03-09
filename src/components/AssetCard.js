
//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import React, { useState } from "react";
import useSort from "query/useSort";
import { intFilter } from "global/library";
import { listFamilyAtom } from "global/global_data";
import { useRecoilState, useResetRecoilState } from "recoil";
import AssetCardSelect from "./AssetCardSelect";

//---------------------- COMPONENT --------------------------
export default React.memo(({idx, no, removeHandler, volume}) => {
    //data
    const [sortList] = useSort();
    const [data, setData] = useRecoilState(listFamilyAtom(idx));
    const resetData = useResetRecoilState(listFamilyAtom(idx));

    //state
    const [sortOpen, setSortOpen] = useState(false);
    const [listOpen, setListOpen] = useState(false);

    //function
    const updateExec = (val) => {
        setSortOpen(false);
        setData(val);
    }

    const selectExec = (val) => {
        setListOpen(false);
        setData({...data, name: val});
    }

    const removeExec = (i) => {
        resetData();
        removeHandler(i);
    }    

    //render
    return (
        <Card>
            <CardButton onClick={() => removeExec(no)}>
                <CardButtonImage src="https://www.quantus.kr/static/media/close.07f49c968bc3e6f2992869fcb645f8db.svg"/>
            </CardButton>
            <CardTitle>자산 {idx < 10 ? '0'+ Number(no+1) : no+1}</CardTitle>
            <CardRow>
                <CardRowLabel>종류</CardRowLabel>
                <CardRowItem>
                    <CardRowItemBox onClick={() => setSortOpen(!sortOpen)} selected={sortOpen}>
                        <CardRowItemTitle>{data.sort}</CardRowItemTitle>
                        <CardRowItemIcon>
                            <CardRowItemIconImage 
                                src='https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg'
                                rotation={sortOpen ? 180 : 0}
                            />
                        </CardRowItemIcon>
                    </CardRowItemBox>
                    {
                        sortOpen ? (
                            <CardSortBox>
                            {
                                sortList ? sortList.map((v, i) => (
                                    <CardSortItem
                                        key={i}
                                        onClick={() => updateExec({...data, sort:v})}
                                        selected={data.sort == v}
                                    >
                                        {v}
                                    </CardSortItem>
                                )): null
                            }
                            </CardSortBox>
                        ) : null
                    }

                </CardRowItem>
            </CardRow>
            <CardRow>
                <CardRowLabel>자산군</CardRowLabel>
                <CardRowItem>
                    <CardRowItemBox onClick={() => setListOpen(!listOpen)} selected={listOpen}>
                        <CardRowItemTitle>{data.name}</CardRowItemTitle>
                        <CardRowItemIcon>
                            <CardRowItemIconImage src='https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg'/>
                        </CardRowItemIcon>
                    </CardRowItemBox>
                    {
                        listOpen ? (
                            <AssetCardSelect list={volume} selectHandler={selectExec}/>
                        ) : null
                    }                    
                </CardRowItem>
            </CardRow>
            <CardRow>
                <CardRowLabel>비중</CardRowLabel>
                <CardRowItem>
                    <CardRowItemBox>
                        <CardRowInput 
                            type="text" 
                            autoComplete="off"
                            value={data.per || '0'} 
                            onChange={(e) => updateExec({...data, per:intFilter(e, 100)})}
                        />
                        <CardRowInputTail>%</CardRowInputTail>   
                    </CardRowItemBox>
                </CardRowItem>
                <CardRowInputComment>0 ~ 100까지 입력할 수 있습니다.</CardRowInputComment>
            </CardRow>                                                                                         
        </Card>          
    )
});

//----------------------- STYLE -----------------------------
const Card = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 38px;
    padding: 38px 28px;
    border: 1px solid rgb(159, 159, 159);
    border-radius: 12px;
    background-color: transparent;
`;
const CardButton = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 23px;
    height: 23px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
const CardButtonImage = styled.img`
    cursor: pointer;
    width: 13px;
    filter: invert(47%) sepia(4%) saturate(8%) hue-rotate(329deg) brightness(100%) contrast(89%);
`;
const CardTitle = styled.h2`
    margin: 0px 0px -10px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    align-self: center;
`;
const CardRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 16px;
    gap: 18px;
`;
const CardRowLabel = styled.label`
    width: fit-content;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 300;
`;
const CardRowItem = styled.div`
    width: 100%;
    position: relative;
`;
const CardRowItemBox = styled.div`
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
const CardRowItemTitle = styled.div`
    height: 36px;
    line-height: 36px;
    text-shadow: none;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    border-radius: 6px;
    color: rgb(255, 255, 255);
`;
const CardRowItemIcon = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: 28px;
    height: 48px;
`;
const CardRowItemIconImage = styled.img`
    transform: rotate(${props => props.rotation}deg);
    padding-top: 1px;
`;
const CardRowInput = styled.input`
    height: 46px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(30, 30, 30);
    border: 1px solid rgb(159, 159, 159);
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(230, 230, 230);
    cursor: text;
    font-weight: 300;
`;
const CardRowInputTail = styled.div`
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
const CardRowInputComment = styled.p`
    color: rgb(159, 159, 159);
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 0px;
`;
const CardSortBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-height: 500px;
    position: absolute;
    border-radius: 5px;
    border: 1px solid rgb(62, 62, 62);
    background: rgb(30, 30, 30);
    z-index: 2;
    overflow: hidden auto;
    top: 55px;
`;
const CardSortItem = styled.div`
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