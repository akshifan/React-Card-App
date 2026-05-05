import React from 'react'
import { cardData } from '../data/cardData';
import Card from '../components/Card';

export const LandingPage = () => {

  const demoCard = cardData[1];

  return (
    <div className="min-h-screen bg-gray-100">
      
      <section className="text-center py-20 px-6 flex flex-wrap flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Discover Players, Track Matches & Build Your Cards
        </h2>

        <p className="text-gray-800 max-w-xl mx-auto mb-8">
          Search your favorite players, view match highlights, and create your
          own sports card collection with likes and subscriptions.
        </p>

        <div className='border rounded-2xl border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)]  p-4'>
          <h1 className='text-center font-bold text-xl'>Sample card</h1>
          
            <Card
          {...demoCard}
          liked={false}
          subscribed={false}
          likeCount={demoCard.followers}
          demo={true}
        />
        </div>

        
      </section>

      <section className="flex flex-wrap justify-center items-center gap-6 px-8 pb-16">

        <div className=" p-6 rounded-2xl border border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] landing">
          <h3 className="text-xl text-black font-semibold mb-2">🔍 Search Players</h3>
          <p className="text-gray-800">
            Find players instantly using live sports APIs and view detailed info.
          </p>
        </div>

        <div className=" p-6 rounded-2xl border border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] landing">
          <h3 className="text-xl text-black font-semibold mb-2">🃏 Create Cards</h3>
          <p className="text-gray-800">
            Add your own cards, like, subscribe, and manage them easily.
          </p>
        </div>

        <div className=" p-6 rounded-2xl border border-[hsl(0,0%,82%)] bg-[hsl(0,0%,91%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] landing">
          <h3 className="text-xl text-black font-semibold mb-2">⚽ Match Highlights</h3>
          <p className="text-gray-800">
            Watch latest match highlights and stay updated with games.
          </p>
        </div>

      </section>

    </div>
  );
}