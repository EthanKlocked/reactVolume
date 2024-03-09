
//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import React from "react";
import { listFamilyAtom } from "global/global_data";
import { useRecoilValue } from "recoil";

//---------------------- COMPONENT --------------------------
export default React.memo(({idx}) => {
    //data
    const data = useRecoilValue(listFamilyAtom(idx));

    //render
    return (
        <ContentPreviewItem key={idx}>
            <ContentPreviewItemName>{`자산 0${idx+1}`}</ContentPreviewItemName> 
            <ContentPreviewItemTail vchk={data.name}>
                {data.name || '선택 안함'}
            </ContentPreviewItemTail>
        </ContentPreviewItem>       
    )
});

//----------------------- STYLE -----------------------------
const ContentPreviewItem = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: start;
    gap: 10px;
`;
const ContentPreviewItemName = styled.span`
    font-size: 16px;
    font-weight: 700;
`;
const ContentPreviewItemTail = styled.div`
    padding: 8px 16px;
    border-radius: 19px;
    box-sizing: border-box;
    background-color: rgb(62, 62, 62);
    font-size: 16px;
    font-weight: 400;
    width:130px;
    text-align:center;
    ${props => !props.vchk ? 
        'background-color: rgb(14, 14, 14); width:100px; color:white' : 
        null
    }  
`;