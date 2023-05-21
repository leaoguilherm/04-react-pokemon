import { Button } from "../../components/Button"
import { Cards } from "../../components/Cards"
import { Input } from "../../components/Input"
import { ContainerHome, ContainerInput, ContainerPokemon, ContainerSearch } from "./styles"

export const HomePage = () => {
    return (
        <>
            <ContainerHome>
                <ContainerSearch>
                    <ContainerInput>
                        <Input placeholder="Pesquisar" label="Buscar" />
                    </ContainerInput>
                    <Button>Buscar</Button>
                </ContainerSearch>

                <ContainerPokemon>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </ContainerPokemon>

            </ContainerHome>
        </>
    )
}
