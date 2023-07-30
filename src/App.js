import './App.css';
import React, { useEffect, useState } from'react';
import AnimeList from './component/AnimeList';
import AnimeInfo from './component/AnimeInfo';
import AddToList from './component/AddToList';
import RemoveFromList from './component/RemoveFromList';
import TopAnime from './component/TopAnime';

function App() {
  const [animeData, setAnimeData] =useState();
  const [search, setSearch] = useState('');
  const [animeInfo, setAnimeInfo] = useState()
  const [myAnimeList, setMyAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState()

  const addTo=(anime)=>{
    const index = myAnimeList.findIndex((myanime)=>{
      return myanime.mal_id === anime.mal_id
    })
    console.log(index)
    if(index < 0){
      const newArray = [...myAnimeList,anime]
      setMyAnimeList(newArray)
    }else{
      alert("Anime already exists in the list")
    }
  }
  const removeFrom=(anime)=>{
    const newArray = myAnimeList.filter((myanime)=>{
      return myanime.mal_id!== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  const getData = async() =>{
    let res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
    let resData = await res.json();
    setAnimeData(resData.data);

    let topAnime = await fetch('https://api.jikan.moe/v4/top/anime')
    let topAmineData = await topAnime.json();
    setTopAnime(topAmineData.data)
  }

  useEffect(()=>{
    getData()
  },[search])
  return (
    <>
    <div className="nav">
      <div className="heading"> <strong>ANIME</strong> API APP</div>
      <div className="serch-box">
        <input type="text" placeholder='search anime' 
        onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
    </div>
    <div className="container">
      <div className="anime-info">
        {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}

      </div>
      <div className="anime-row">
        <h2 className='row-heading'>Searched Anime</h2>
        <div className="row">
          <AnimeList  animeList={animeData} 
                      setAnimeInfo={setAnimeInfo} 
                      animeComponent = {AddToList}
                      handleList={(anime)=>{addTo(anime)}}
                      />
        </div>
        <h2 className='row-heading'>Your Anime List</h2>
        <div className="row">
          <AnimeList  animeList={myAnimeList} 
                      setAnimeInfo={setAnimeInfo} 
                      animeComponent = {RemoveFromList}
                      handleList={(anime)=>{removeFrom(anime)}}
                      />
        </div>
        <h2 className='row-heading'>Top Anime</h2>
        <div className="row">
          <TopAnime topAnime = {topAnime}
                    setAnimeInfo={setAnimeInfo}
                    />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
