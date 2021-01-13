import React ,{ Component } from "react"
import { connect } from "react-redux"

class SongList extends Component {

   render(){
         
    return (
        <div>
           <h1>Song List</h1>
    
       </div>
    
    );
   }


}
const mapStateToProps =(state)=>{
    console.log(state.songs)
  return {songs: state.songs}
}
export default connect(mapStateToProps)(SongList)