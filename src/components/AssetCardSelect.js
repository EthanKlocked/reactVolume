
//---------------------- IMPORT -----------------------------
import React, { useLayoutEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import { divideArray } from "global/library";

//---------------------- COMPONENT --------------------------
export default React.memo(({list, selectHandler}) => {
    //ref
    const scrollRef = useRef();

    //state
    const [key, setKey] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [totalHeight, setTotalHeight] = useState(null);
    const [dividedList, setdividedList] = useState();
    const [showCnt, setShowCnt] = useState(0);
    const [unit] = useState(200);
    const [rowHeight] = useState(47);

    //memo
    const itemGear = useMemo(() => {
        if(!dividedList) return null;
        
        let usingCnt = Math.min(dividedList.length-2, showCnt);
        let prev = dividedList[usingCnt];
        let next = dividedList[usingCnt+1];
        let whole = prev?.length && next?.length ? [...prev, ...next] : null;
        if(usingCnt < 0) {
            usingCnt = 0;
            whole = dividedList[usingCnt];
        }

        return whole?.length ? (
            whole.map((v, i) => {
                return (
                    <ListItem 
                        key={i} 
                        onClick={() => selectHandler(v)} 
                        h={rowHeight}
                        style={{
                            top: (usingCnt*unit+i)*rowHeight,
                        }}
                    >
                        <ListItemObj>
                            {v}
                        </ListItemObj>
                    </ListItem>
                )
            })
        ) : null
    },[dividedList, showCnt]);

    useLayoutEffect(() => {        
        let rawData = list;
        if(key){ 
            rawData = rawData.filter(v => v.includes(key));
            setFilteredList(rawData);
            scrollRef.current.scrollTo(0, 0);
        }else{
            setFilteredList(list);
        }
    }, [key, list]);

    useLayoutEffect(() => {
        if(filteredList.length){
            setTotalHeight(filteredList.length * rowHeight);
            let rawData = filteredList;
            const divided = divideArray(rawData, unit);
            setdividedList(divided);
        }
    }, [filteredList, rowHeight]);

    //render
    return list ? (
        <>
            <SearchBox>
                <SearchImage 
                    src='https://www.quantus.kr/static/media/search.9478e73e81517344a63859a557b85c6e.svg'
                />
                <SearchInput 
                    placeholder="검색어를 입력하세요."
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
            </SearchBox>
            <ListBox>
                <ListContent 
                    ref={scrollRef}
                    onScroll={(e) => {
                        setShowCnt(Math.floor(e.target.scrollTop/rowHeight/unit));
                    }}
                >
                    <ListItemBox h={totalHeight}>
                        {itemGear}
                    </ListItemBox>
                </ListContent>
            </ListBox>
        </>
    ) : null
});

//----------------------- STYLE -----------------------------
const SearchBox = styled.div`
    position: absolute;
    top: 46px;
    display: flex;
    box-sizing: border-box;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(30, 30, 30);
    border-width: 1px;
    border-style: solid;
    border-color: transparent rgb(159, 159, 159) rgb(159, 159, 159);
    border-image: initial;
    color: rgb(230, 230, 230);
    cursor: text;
    height: 60px;
    min-height: 60px;
    width: 100%;
    z-index: 3;
`;
const SearchImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 18px;
    margin-right: 10px;
`;
const SearchInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: rgb(230, 230, 230);
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    font-weight: 300;
`;
const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-height: 606px;
    min-height: 350px;
    position: absolute;
    border-radius: 0px 0px 6px 6px;
    border: 1px solid rgb(159, 159, 159);
    background: rgb(30, 30, 30);
    z-index: 2;
    overflow: hidden auto;
    top: 105px;
`;
const ListContent = styled.div`
    position: relative;
    width: 100%;
    overflow: auto;
    will-change: transform;
    direction: ltr;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
`;
const ListItemBox = styled.div`
    height: ${props => props.h}px;
    width: 100%;
    overflow-y: auto;
    position:relative;
`;
const ListItem = styled.div`
    line-height: ${props => props.h}px;
    height: ${props => props.h}px;
    text-shadow: none;
    text-align: center;
    color: rgb(230, 230, 230);
    font-size: 16px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    padding: 0px 20px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent rgb(159, 159, 159);
    border-image: initial;
    cursor: pointer;
    left: 0px;
    top: 0px;
    width: 100%;
    position:absolute;
`;
const ListItemObj = styled.div`
    width: 100%;
`;
