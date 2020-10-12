import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import Result from './Components/Result';
import Movie from './Components/Movie'
import { NoMatch } from './Components/Nomatch';
import Watchlist from './Components/Watchlist'
import Home from './Components/Home/index'
import Login from './Components/Form/Login';
import Register from './Components/Form/Register';
import { connect } from "react-redux";

function App(props) {
  // var [searchText, setSearchText] = useState('');
  // var [movieDetails, setMovie] = useState([]);

  

  var handleSubmit = (e) => {
    fetch(`http://www.omdbapi.com/?s=${props.movieName}&apikey=f16833ec`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.Response === 'True') {
          // setMovieList([data.Search]);
          props.dispatch({
            type: "All-Movies",
            item: [data.Search]
          });
        }
        else {
          console.error('error')
        }
      })
  }



  return (
    <BrowserRouter>
      <div className='app'>
        <NavigationBar
          movieName={props.movieName}
          handleSubmit={handleSubmit} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/search'>
            <Result />
          </Route>
          <Route
            exact
            path="/watchlist"
            render={() => {
              if (props.name === null || props.name === undefined) {
                alert('please Sign In first')
                return <Redirect to="/login" />;
              } else {
                return <Watchlist />;
              }
            }} />
          <Route exact path='/movieDetails'>
            <Movie
              movieName={props.movieName}
              moviesList={props.moviesList} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
function mapStateToProps(state) {
  return {
    moviesList: state.moviesList,
    movieName: state.movieName,
    name: state.movieName,
    homeMoviesList: state.homeMoviesList,
    searchMovielist: state.searchMovielist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

