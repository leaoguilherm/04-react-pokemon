
import { ContainerCards } from "./styles"


export const Cards = ({ listPokemon }) => {
    return (
        <>
            {listPokemon?.map((pokemon) => {
                return (
                    <ContainerCards key={pokemon.name}>
                        <img src={pokemon.imagemUrl} alt="Imagem Pokemon"></img>
                        <div>{pokemon.name}</div>
                    </ContainerCards>
                )
            })}

        </>
    )
}