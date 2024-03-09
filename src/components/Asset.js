//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { testVolumeAtom, orderAtom } from "global/global_data";
import { useRecoilState } from "recoil";
import { useState } from "react";
import AssetCard from "./AssetCard";
import AssetTag from "./AssetTag";

//---------------------- COMPONENT --------------------------
const Asset = () => {
    //data
    const [order, setOrder] = useRecoilState(orderAtom);
    const [volume] = useRecoilState(testVolumeAtom);

    //state
    const [open, setOpen] = useState(false);

    //function
    const addAsset = () => {
        if(order.length){
            const nextValue = String(Number(order[order.length-1])+1);
            setOrder([...order, nextValue]);
        }else{
            setOrder(['1']);
        }
    }

    const removeAsset = (i) => {
        const copied = [...order];
        copied.splice(i, 1);
        setOrder(copied);
    }

    //render
    return(
        <Container>
            <Section>
                <Content>
                    <ContentTitle>자산군 추가</ContentTitle>
                    <ContentButton onClick={() => setOpen(!open)}>
                        {open ? '접기' : '펼치기'}
                        <ContentButtonImage 
                            src="https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg"
                            rotation={open ? 180 : 0}
                        />
                    </ContentButton>
                </Content>
                {
                    open ? (
                        <>
                        <Article>
                            {
                                order ? order.map((v, i) => (
                                    <AssetCard 
                                        key={v}
                                        //data={v}
                                        idx={v} 
                                        no={i}
                                        removeHandler={removeAsset}
                                        volume={volume}
                                    />
                                )) : null
                            }                            
                            <ArticleButton onClick={addAsset}>
                                <ArticleButtonImage src="https://www.quantus.kr/static/media/add.474ee39bddc74da6d44593139cc66409.svg"/>
                            </ArticleButton>
                        </Article>
                        </>
                    ) : (
                        <ContentPreview>
                            {
                                order ? order.map((v, i) => (
                                    <AssetTag key={v} idx={v}/>
                                )) : null  
                            }
                        </ContentPreview>
                    )
                }
            </Section>
        </Container>
    )
}
export default Asset;

//----------------------- STYLE -----------------------------
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 38px 38px 38px 28px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgb(30, 30, 30);
`;
const Content = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;
const ContentTitle = styled.h2`
    margin: 0px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`;
const ContentButton = styled.button`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    color: rgb(236, 97, 38);
    cursor: pointer;
`;
const ContentButtonImage = styled.img`
    width: 12px;
    height: 7px;
    transform: rotate(${props => props.rotation}deg);
    margin-left: 13px;
`;
const Article = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-top: 28px;
`;
const ArticleButton = styled.button`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    min-height: 200px;
    border: 1px solid rgb(159, 159, 159);
    border-radius: 12px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        background:#222;
    }
`;
const ArticleButtonImage = styled.img`
    width: 55px;
    height: 55px;
    filter: invert(47%) sepia(4%) saturate(8%) hue-rotate(329deg) brightness(100%) contrast(89%);
`;
const ContentPreview = styled.div`
    display: flex;
    gap: 0px 32px;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 300;
    color: rgb(252, 252, 252);
`;