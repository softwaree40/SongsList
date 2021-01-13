import {combineReducers } from "redux"


 const songsReducer = ()=>{

    return [
        {tile: "Water No Get Enemy",duration: `${new Date()}`},
        {tile: "One Love",duration: `${new Date()}`},
        {tile: "Keredim",duration: `${new Date()}`},
        {tile: "Mo Ri KeKe Kan",duration: `${new Date()}`},
        {tile: "Send Down The Rain",duration: `${new Date()}`}

]
};
// selected song reducer
const songSelected =(selectedSong ="", action)=>{

  if(action.type === "SONG_SELECTED"){
    return action.payload

  };
   return selectedSong

};

export default combineReducers({
 songs: songsReducer,
 selectedSong: songSelected


});