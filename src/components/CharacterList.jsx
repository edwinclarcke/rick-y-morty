import React, {useState, useEffect} from 'react'
import CharacterCard from "./CharacterCard"
import Navbar from "./Navbar";
import axios from "axios"
import ChangePage from './ChangePage'



function CharacterList() {
    
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPage, setLimitPage] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('')

    //https://rickandmortyapi.com/api/character/?page=2&name=rick

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}`)
        .then(res => {
            setCharacters(
                res.data.results
            )
            setLimitPage(
                res.data.info.pages
            )
        })
        .catch((err)=>{
            setCharacters([])
        })

    },[currentPage,search])




        return (
            <div>

                <Navbar
                search={search}
                setSearch={setSearch}/>

                <div className='character-list-background'>
                    {
                        characters.map((obj) => {                                                      
                            return(
                                <CharacterCard
                                name={obj.name}
                                image={obj.image}
                                status={obj.status}
                                gender={obj.gender}
                                species={obj.species}/>
                            )
                        })
                    }
                </div>
                <ChangePage 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limitPage={limitPage}/>
            </div>
    
        )

    


}
export default CharacterList

