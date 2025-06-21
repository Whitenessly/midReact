import React from 'react'

const Banner = (props) => {
  // console.log(props);
  const selectedAnime = props.data.find((item) => item.id === props.selectedId);
  // console.log(selectedAnime);

  return (
    <div className='500 w-full flex flex-col gap-[20px] px-[83px] py-[15px]'>
      <p className='text-3xl font-semibold text-white'>Explore</p>
      <p className='text-xl font-normal text-[#868686]'>What are you gonna watch today ?</p>
      <div className='rounded-xl h-[400px] relative overflow-hidden'>
        <img src={selectedAnime.banner} className='w-full' alt="" />
        <div className='absolute top-0 bg-gradient-to-r from-[#1D1D1DCC] z-10 w-full h-full'></div>
        <div className='absolute bottom-[39px] left-[47px] w-[45%] z-10 flex flex-col gap-[15px]'>
          <p className='font-semibold text-3xl text-shadow text-white'>{selectedAnime.movieName}</p>
          <p className='text-sm font-normal text-white'>{selectedAnime.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner