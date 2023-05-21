import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Cards } from "../../components/Cards"
import { Input } from "../../components/Input"
import { ContainerHome, ContainerInput, ContainerPokemon, ContainerSearch } from "./styles"
import { getApi, getPokemon } from "../../api/pokeApi"

export const HomePage = () => {
    const [allListPokemon, setAllListPokemon] = useState([])
    const [listPokemon, setListPokemon] = useState([])
    const [valueChange, setValueChange] = useState('')

    const loadPage = async () => {
        const returnApi = await getApi()
        const pokemonList = returnApi.data.results

        const updateList = await Promise.all(pokemonList?.map(async (pokemon) => {
            const pokemonResponse = await getPokemon(pokemon.url)
            const pokemonData = pokemonResponse.data;

            return {
                name: pokemonData.name,
                imagemUrl: pokemonData.sprites.front_default
            }
        }))
        setListPokemon(updateList)
        setAllListPokemon(updateList)
    }

    const handleChange = (event) => setValueChange(event.target.value)


    const filterPokemon = () => {
        const searchPokemon = allListPokemon.filter((listPokemon) => {
            return listPokemon.name.includes(valueChange)
        })
        setListPokemon(searchPokemon)
    }

    const resetPokemon = () => {
        setListPokemon(allListPokemon)
    }

    useEffect(() => {
        loadPage()
    }, [])
    
    return (
        <>
            <ContainerHome>
                <ContainerSearch>
                    <ContainerInput>
                        <Input placeholder="Pesquisar" label="Buscar" onChange={handleChange} value={valueChange} />
                    </ContainerInput>
                    <Button onclick={filterPokemon}>Buscar</Button>
                    <Button onclick={resetPokemon}>Limpar Busca</Button>
                </ContainerSearch>

                <ContainerPokemon>
                    <Cards listPokemon={listPokemon} />
                </ContainerPokemon>

            </ContainerHome>
        </>
    )
}
