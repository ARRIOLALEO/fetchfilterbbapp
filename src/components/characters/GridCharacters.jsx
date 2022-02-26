const GridCharacters = ({characters}) =>{
    return(<section  className="cards">
        {characters.map((character)=>{

            return(
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={character.img} alt={character.name}/>
                    </div>
                    <div className="card-back">
                        <ul>
                            <li><strong>Character name : </strong> {character.name}</li>
                            <li><strong>Actor name :</strong>{character.portrayed}</li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        }
        )}
    </section>)
}

export default GridCharacters