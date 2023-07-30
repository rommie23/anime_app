import React from 'react'

const TopAnime = ({topAnime,setAnimeInfo}) => {
    return(
        <>
        {
            topAnime ?
            topAnime.map((anime, index)=>{
                // console.log(anime)
                return(
                    <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <div className="anime-title">
                            <h4>{anime.title}</h4>
                            <div className="overlay" >
                                <h3>Synopsis</h3>
                                <p>{anime.synopsis}</p>
                            </div>
                        </div>
                    </div>
                )
            }):"no data found"
        }
        </>
    )
}

export default TopAnime
