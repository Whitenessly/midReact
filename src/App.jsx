import { useState } from 'react'
import React from 'react'
import './App.css'
import { animeList } from './ultis/constants'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import List from './Components/List/List'

function App() {
  const [data, setData] = useState([...animeList]);
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <Header />
      <Banner data={data} selectedId={selectedId} />
      <div className='w-full flex flex-col gap-[24px] py-[24px] px-[83px]'>
        <p className='text-4xl font-semibold text-white'>New Release</p>
        <div className='flex justify-between'>
          <List data={data} selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
    </>
  )
}

export default App
