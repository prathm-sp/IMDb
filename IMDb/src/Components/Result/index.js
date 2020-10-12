import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import '../Navbar/bootstrap.min.css'
import { connect } from 'react-redux'

function Result(props) {
  var imageURl = 'https://image.tmdb.org/t/p/w300/';
  const addToWatchList = (item) => {
    if (props.name === null || props.name === undefined) {
      alert('please sign in first');
    }
    else {
      var ID = item.imdbID;
      fetch(`http://www.omdbapi.com/?i=${ID}&apikey=f16833ec`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          props.dispatch({
            type: 'Add-to-WatchList',
            item: data
          })
        })
    }
  }

  const updateMovie = (item) => {
    var ID = item.imdbID;

    fetch(`http://www.omdbapi.com/?i=${ID}&apikey=f16833ec`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        props.dispatch({
          type: 'Single-Movie',
          item: data
        })
      })
  }

  var Obj = () => {
    if (props.moviesList.length !== 0) {
      console.log(props.moviesList)
      return (
        props.moviesList[0][0].map((item) => (
          <div className="col-md-3">
            <div className="well text-center jumbotron">
              <img src={item.Poster}></img>
              <h5>{item.Title}</h5>
              <Link to="/movieDetails" className="btn btn-primary" onClick={(e) => { updateMovie(item) }}>View</Link>
              <button id="watch" onClick={(e) => { addToWatchList(item) }}>Add to watchlist</button>
            </div>
          </div>
        ))
      )
    }
    return (
      <h2></h2>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <Obj />
      </div>
    </div>

  )
}

function mapStateToProps(state) {
  return {
    name: state.name,
    moviesList: state.moviesList,
    WatchList: state.WatchList,
    singleMovie: state.singleMovie,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);