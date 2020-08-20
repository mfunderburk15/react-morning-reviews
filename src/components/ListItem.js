import React from 'react'

export default function ListItem(props) {
    const { movie } = props
    return <div className='List-Item'>
        <img src={movie.posterImg} className="movie-poster" alt={movie.title} />
        <div className='movie-info'>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
        </div>
    </div>
}