import React from 'react'
import { connect } from "react-redux";

function InputSearchMovies(props) {
    console.log(props.searchMovielist)
    return (
        <div>
          
        </div>
    )
}

function mapStateToProps(state) {
    return {
      searchMovielist: state.searchMovielist
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputSearchMovies);
