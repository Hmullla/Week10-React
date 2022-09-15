import React from 'react' 

const MovieCard = ({movie: { imdbID, Year, Poster, Title, Type  } })=>{
    return (
        <div className='movie' key={imdbID}>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div className='movie-info'>
                <h2>{Title}</h2>
                <p>{Year}</p>
            </div>
        </div>
    )
}

export default MovieCard;