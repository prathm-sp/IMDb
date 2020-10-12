import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

function Watchlist(props) {

    const updateMovie = (item) => {
        var ID = item.imdbID;
        fetch(`http://www.omdbapi.com/?i=${ID}&apikey=f16833ec`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                props.dispatch({
                    type: 'Single-Movie',
                    item: data
                })
            })
    }

    const Watch = () => {
        if (props.WatchList.length > 0) {
            console.log(props.WatchList)
            return (
                props.WatchList.map((item) => (
                    <div className="col-md-3">
                        <div className="well text-center jumbotron">
                            <img src={item.Poster}></img>
                            <h5>{item.Title}</h5>
                            <Link to="/movieDetails" className="btn btn-primary" onClick={(e) => { updateMovie(item) }}>View</Link>
                        </div>
                    </div>
                )))
        }
        else {
            return (
                <h1>no data</h1>
            )
        }
    }
    return (
        <div className="container">
            <div className="row">
                <Watch />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        WatchList: state.WatchList,
        singleMovie: state.singleMovie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);

