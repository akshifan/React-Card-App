import React from 'react'
import { cardData } from '../data/cardData';
import Card from '../components/Card';

export const LandingPage = () => {

  const demoCard = cardData[1];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      
      <section className="text-center relative py-20 px-6 flex flex-wrap flex-col justify-center items-center overflow-hidden">
         <video
    autoPlay
    loop
    muted
    playsInline
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      opacity-75
      blur-sm
      mix-blend-screen
    "
  >
    <source src="/soccer.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/20"></div>

  
        <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">
         <span className="bg-linear-to-r from-blue-300 to-gray-400 bg-clip-text text-transparent">Discover Players, Track Matches & Build Your Cards</span> 
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-7">
          Search your favorite players, view match highlights, and create your
          own sports card collection with likes and subscriptions.
        </p>

        <div className=' rounded-3xl shadow-2xl  bg-white/10 backdrop-blur-lg  p-4 mx-auto w-fit'>
          <h1 className='text-center font-bold text-xl'>Sample card</h1>
          
            <Card
          {...demoCard}
          liked={false}
          subscribed={false}
          likeCount={demoCard.followers}
          demo={true}
        />
        </div>


      <section className="relative z-10 px-6 py-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-white font-bold mb-4">
              🃏 Create Cards
            </h3>
            <p className="text-gray-300 leading-7">
              Create custom cards, subscribe, and manage your collection easily.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-white font-bold mb-4">
              🔍 Search Players
            </h3>
            <p className="text-gray-300 leading-7">
              Find players by entering their names and explore detailed player information.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-white font-bold mb-4">
              ⚽ Match Highlights
            </h3>
            <p className="text-gray-300 leading-7">
              Watch football highlights and stay updated with latest matches worldwide.
            </p>
          </div>

        </div>
      </section>
      </section>

    </div>
  );
}