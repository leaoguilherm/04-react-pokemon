import styled from "styled-components";


export const ContainerHome = styled.div`
    height: auto;
    width: 100%;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const ContainerSearch = styled.div`
    display: flex;
    gap: 6px; 

    @media screen and (max-width: 890px) {
            justify-content: center;
    }

    @media screen and (max-width: 500px) {
            flex-direction: column;
            align-items: center;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    gap: 5px;
`

export const ContainerPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    padding-bottom: 22px;

    @media screen and (max-width: 1218px) {
            justify-content: center;
    }
`