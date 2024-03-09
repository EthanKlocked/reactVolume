//---------------------- IMPORT -----------------------------
import styled from "styled-components";
import useMenu from "query/useMenu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//---------------------- COMPONENT --------------------------
const Menu = () => {
    //init
    const navigate = useNavigate();

    //data
    const [menu] = useMenu();
    const [selected, setSelected] = useState('자산배분');

    //function
    const link = (v, k) => {
        setSelected(k);
        return v ? navigate(v) : null;
    }

    //render
    return(
        <Container>
            <Content>
                <Nav>
                {
                    menu ? Object.entries(menu).map(([k, v]) => (
                        <Item 
                            key={k} 
                            onClick={() => link(v, k)} 
                            selected={selected==k}   
                        >
                            {k}
                        </Item>
                    )) : null
                }
                </Nav>
                <ExtraMenu >
                    <Eicon src="https://www.quantus.kr/static/media/newNotice.a8a37ea207d96eed07258fc1448ff7dd.svg"/>
                    <Etext>공지사항</Etext>
                </ExtraMenu>
            </Content>
        </Container>
    )
}
export default Menu;
//----------------------- STYLE -----------------------------
const Container = styled.div`
    display: flex;
    width:100%;
    border-bottom: 1px solid rgb(30, 30, 30);
    height:52px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    min-width: 1020px;
    align-items:center;
    background: rgb(14, 14, 14);
    position: sticky;
    z-index: 98;
`;
const Content = styled.div`
    display:flex;
    width: 1020px;
    height:24px;
    justify-content:space-between;
`;
const Nav = styled.nav`
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    :hover{
        transition: 0.2s ease-out;
        color: rgb(236, 38, 38);
    }
`;
const Item = styled.a`
    height:24px;
    margin-right:55px;
    cursor: pointer;
    color: ${props => props.selected ? 'rgb(236, 38, 38)' : 'rgb(255, 255, 255)'}
`;
const ExtraMenu = styled.div`
    display:flex;
    color:#fff;
    vertical-align:middle;
`;
const Eicon = styled.img`
    margin-right:8px;
    cursor:pointer;
`;
const Etext = styled.span`
    cursor:pointer;
`;