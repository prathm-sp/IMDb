import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { connect } from "react-redux";


function NavBar(props) {
  var movieName = props.movieName;
  console.log(props.searchMovielist)

  var handleChange = (e) => {
    // setMovieName(e.target.value);
    props.dispatch({
      type: "Movie-Name",
      item: e.target.value
    });
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.dispatch({
          type: 'Search-Movies',
          item: data
        })
      })
  };

  var InputSearchMovies = () => {
    console.log(movieName)
    if (movieName === "") {
      props.dispatch({
        type: 'Search-Movies',
        item: []
      })
      return(
        <h1></h1>
      )
    }
    else {
      return (
        props.searchMovielist[0].results.map((item) => (
          <div className="search-item" key={item.id}>
            <img
              src={`${`https://image.tmdb.org/t/p/w92/${item.poster_path}`}`}
              alt={item.title}
            />
            <div className="details">
              <span className="title">{item.title}</span>
              <span className={"sub-title"}>
                {item.release_date && item.release_date.slice(0, 4)}
              </span>
              <div className={"rating-container"}>
                <div className="rating">
                  {item.vote_average}
                </div>
              </div>
            </div>
          </div>
        ))
      )
    }
  }

  const NameButton = () => {
    if (props.name === null || props.name === undefined) {
      return (
        <Link id="signIN" to="/login"><strong >Sign In</strong></Link>
      )
    }
    else {
      return (
        <strong id="signIN">{props.name}</strong>
      )
    }
  }

  return (
    <div>
      <nav id="Navbar" class="navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand" to="/">IMDb</Link>
        <select name="s" id="quicksearch" class="quicksearch_dropdown navbarSprite">
          <option value="all">All</option>
          <option value="tt">Titles</option>
          <option value="ep">TV Episodes</option>
          <option value="nm">Celebs</option>
          <option value="co">Companies</option>
          <option value="kw">Keywords</option>
        </select>
        <div id="navbarSupportedContent">
          <form id="forms" class="form-inline my-2 my-lg-0">
            <input onChange={handleChange} value={movieName} className="inputs" placeholder="Search" />
            <Link to="/search"> <button id="btn" class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSubmit}><img onClick={props.handleSubmit} id="img" src="https://image.flaticon.com/icons/png/512/116/116836.png" /></button></Link>
          </form>
        </div>
        <strong id="pro">IMDbPro</strong>
        <Link id="watchList" to="/watchlist"> <strong >{props.WatchList?.length} +watchlist</strong></Link>
        <NameButton />
      </nav>
      <div id="searchMovies">

      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    name: state.name,
    WatchList: state.WatchList,
    searchMovielist: state.searchMovielist
  };
}

export default connect(mapStateToProps)(NavBar)