import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css'

function Movie(props) {
    const addToWatchList = () => {
        if (props.name === null || props.name === undefined) {
            alert('please sign in first');
        }
        else {
            props.dispatch({
                type: 'Add-to-WatchList',
                item: props.singleMovie[0]
            })
        }
    }
    var Single = () => {
        console.log(props.singleMovie)
        if (props.singleMovie.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.singleMovie[0].Poster} className="thumbnail" />
                        </div>
                        <div className="col-md-8">
                            <h2>{props.singleMovie[0].Title}</h2>
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Genre:</strong> {props.singleMovie[0].Genre}</li>
                                <li className="list-group-item"><strong>Released:</strong> {props.singleMovie[0].Released}</li>
                                <li className="list-group-item"><strong>Rated:</strong> {props.singleMovie[0].Rated}</li>
                                <li className="list-group-item"><strong>IMDB Rating:</strong> {props.singleMovie[0].imdbRating}</li>
                                <li className="list-group-item"><strong>Director:</strong> {props.singleMovie[0].Director}</li>
                                <li className="list-group-item"><strong>Writer:</strong> {props.singleMovie[0].Writer}</li>
                                <li className="list-group-item"><strong>Actors:</strong> {props.singleMovie[0].Actors}</li>
                            </ul>
                            <button onClick={addToWatchList} id="watchlist">Add to watchlist</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="well">
                            <h3>Plot</h3>
                            {props.singleMovie[0].Plot}
                            <hr />
                            <a href={`https://www.imdb.com/title/${props.singleMovie[0].imdbID}/`} target="_blank" className="btn btn-primary">View IMDB</a>
                            <Link to="/" className="btn btn-default">Go Back To Search</Link>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    return (
        <div className="container">
            <div className="well jumbotron">
                <Single />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        singleMovie: state.singleMovie,
        WatchList: state.WatchList,
        name: state.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
