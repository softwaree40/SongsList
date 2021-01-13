import {combineReducers } from "redux"


 const songsReducer = ()=>{

    return [
        {tile: "Water No Get Enemy",duration: "2:30"},
        {tile: "One Love",duration: "3:30"},
        {tile: "Keredim",duration: "7:30"},
        {tile: "Mo Ri KeKe Kan",duration: "9:30"},
        {tile: "Send Down The Rain",duration: "10:30"}

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