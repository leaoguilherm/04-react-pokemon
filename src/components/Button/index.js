import { ButtonStyle } from "./styles";


export const Button = ({onclick, children}) => {
    return (
        <ButtonStyle onClick={onclick}>{children}</ButtonStyle>
    )
}