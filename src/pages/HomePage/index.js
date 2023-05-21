import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { ContainerHome, ContainerInput, ContainerSearch } from "./styles"

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

            </ContainerHome>
        </>
    )
}
