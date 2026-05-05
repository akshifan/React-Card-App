import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const PlayersApi = () => {

    const [players, setplayers] = useState([]);
    const [index, setindex] = useState(1);
    const [loading, setLoading] = useState(false);

    const getPlayerData = async () => {
      try{
        const res= await fetch(`https://www.scorebat.com/video-api/v3/`);
        const data = await res.json()
        setplayers(data.response || [])
        console.log(data);
      }
      catch(e){
        console.log(e);   
      }
    }

  useEffect(function() {
    getPlayerData()
  },[])


  let playersData ="Please Wait..." //<h3 className='text-gray-800 text-2xl '> Loading ....</h3>

  const itemsPerPage = 5;
  const start = (index - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = players.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(players.length / itemsPerPage));


  const getVideoSrc = (embed) => {
    const match = embed.match(/src='([^']+)'/);
    return match ? match[1] : "";
  };

  if( players.length > 0 ){
    playersData = currentData.map( (elem,idx) => {
      return <div key={idx} className='flex flex-wrap overflow-hidden text-center font-medium h-72 w-72 rounded-2xl justify-center flex-col items-center p-1 border border-[hsl(0,0%,74%)] bg-[hsl(0,0%,97%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)]'>
              <p>{elem.competition}</p>
              <p>{elem.title}</p>
              <p>{new Date(elem.date).toLocaleString()}</p>

        {elem.videos?.[0] && (
          <iframe
            className='object-cover w-40 rounded-2xl mt-2'
            src={getVideoSrc(elem.videos[0].embed)}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          )
        }
      </div>
    })}

  return (
    <div className='border border-[hsl(0,0%,85%)] bg-[hsl(0,0%,83%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] p-4 sm:p-6 flex flex-wrap flex-col gap-7 rounded-2xl m-4'>
      <h1 className='text-center font-extrabold text-xl mb-4'>Matches Api</h1>
      <div className='relative  flex flex-wrap justify-center items-center gap-4 p-2'>
        {playersData}
        {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mx-auto">
            </div>
            <p className="mt-2 font-bold">Loading...</p>
          </div>
        </div>
        )}
      </div>

      <div className='flex justify-center gap-4 mt-8'>
        <button
          onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setindex(prev => prev - 1);
            setLoading(false);
          },300);  
          }}
          disabled={index <= 1}
          className='px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50'
        >
          Prev
        </button>

        <span className='font-bold'>
          Page {index} of {totalPages}
        </span>

        <button
          onClick={() => { 
            setLoading(true);
            setTimeout(() => {
              setindex(prev => prev + 1);
              setLoading(false);
            },300);
            }}
          disabled={index >= totalPages}
          className='px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  )
}