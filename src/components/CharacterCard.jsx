import React from 'react'

function CharacterCard({image, name, status, species, gender}) {


    

    return (
        <div className='card-background'>
            <div className='card'>

                <div className='img-div'>
                    <img src={image}/>
                </div>

                <div className='attributes-div'>
                    
                    <div className="attribute">
                        Name: {name}
                    </div>
                    <div className="attribute">
                        Status: {status} <div className={status==='unknown'?'icon unknown':status==='Alive'?'icon alive':'icon dead'} ></div>
                    </div>
                    <div className="attribute">
                        Specie: {species}
                    </div>
                    <div className="attribute">
                        Gender: {gender}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CharacterCard

// name  status  species  gender  