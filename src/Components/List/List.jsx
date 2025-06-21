import React from 'react'
import Anime from '../Anime/Anime'

const List = (props) => {
    // console.log(props);
    const filteredData = props.data.filter((item) => item.id !== props.selectedId);
    // console.log(filteredData);

    return filteredData.map((item) => {
        return <Anime item={item} setSelectedId={props.setSelectedId} />
    })
}

export default List