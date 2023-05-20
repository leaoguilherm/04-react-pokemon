import pokemonlogo from "../../assets/pokemon-logo.png"
import { HeaderStyle, LogoStyle } from "./styles"

export const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle src={pokemonlogo} alt="Pokemon Logo"></LogoStyle>
        </HeaderStyle>
    )
}