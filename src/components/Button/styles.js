import styled from "styled-components";
import { red } from "../../theme";

export const ButtonStyle = styled.button`
    padding: 11px 18px 11px 18px;
    max-height: 37px;
    border: 0px;
    align-self: flex-end;
    border-radius: 10px;
    background-color: ${red};
    color: white;
    display: flex;
    cursor: pointer;
    transition: filter .2s;

    @media screen and (max-width: 500px) {
        align-self: center;
    }

    &:hover {
        filter: brightness(85%);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
`