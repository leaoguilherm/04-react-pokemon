import styled from "styled-components";
import { gray } from "../../theme";

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 28px 15px 28px;
    background-color: ${gray};
    border-radius: 20px;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);

    &:hover {
        cursor: pointer;
        transition: filter .2s;
        filter: brightness(140%);
    }
`

export const Name = styled.div`
    font-weight: bold;
`
