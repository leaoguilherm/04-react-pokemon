import styled from "styled-components";
import { red } from "../../theme";

export const HeaderStyle = styled.header`
    background-color: ${red};
    display: flex;
    justify-content: center;
    padding: 12px 0px 12px 0px;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
`

export const LogoStyle = styled.img`
    max-width: 110px;
`