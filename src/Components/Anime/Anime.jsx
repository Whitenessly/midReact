import React from 'react'

const Anime = (props) => {
    // console.log(props);
    const handleClick = () => {
        props.setSelectedId(props.item.id);
    }

    return (
        <div onClick={handleClick} className='w-[13%] flex flex-col gap-[5px] items-center'>
            <div className='w-full relative rounded-xl overflow-hidden'>
                <img src={props.item.image} className='w-full' alt="" />
                <div className='w-full h-full absolute top-0 bg-gradient-to-t from-[#1D1D1DCC] flex items-end justify-center p-[7px]'>
                    <p className='text-white text-bafe font-normal'>Episode {props.item.episode}</p>
                </div>
            </div>
            <p className='text-white text-base font-semibold mt-[10px] text-center'>{props.item.movieName}</p>
        </div>
    )
}

export default Anime