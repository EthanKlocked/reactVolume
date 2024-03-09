//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { testVolumeAtom } from "global/global_data";

//---------------------- COMPONENT --------------------------
const Nth = () => {
    //data
    const setVolume = useSetRecoilState(testVolumeAtom);

    //function
    const test = () => {
        const test = [];
        for(let i=0; i<100020; i++){
            test.push(String(i+1));
        }
        setVolume(test);
    }

    //render
    return(
        <Container>
            <Content>
                Nothing on this endpoint
            </Content>
            <TestButton onClick={test}>assetData Test</TestButton>
        </Container>
    )
}
export default Nth;
//----------------------- STYLE -----------------------------
const Container = styled.div`
    width:1020px;
    color:white;
    padding:100px;
    height:1000vh;    
`;
const Content = styled.div`
`;
const TestButton = styled.button`
    margin : 100px 0;
    padding:30px;
    background : black;
    border:solid 1px #fff;
    border-radius:20px;
    color:#fff;
    font-size:20px;
    cursor:pointer;
`;