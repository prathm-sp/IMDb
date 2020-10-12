import React, { useState, useRef, useEffect } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './style.css'

function Home(props) {
    var imageURl = 'https://image.tmdb.org/t/p/w300/';

    var [pageNo, SetPage] = useState(1)
    var [pages, setPages] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                props.dispatch({
                    type: 'Home-Movies',
                    item: data
                })
            })
    }, [])
    const addToWatchList = (item) => {
        if (props.name === null || props.name === undefined) {
            alert('please sign in first');
        }
        else {
            var ID = item.id;
            fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    let ID = data.imdb_id;
                    console.log(ID)
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
                })
        }
    }

    const updateMovie = (item) => {
        var ID = item.id;

        fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let ID = data.imdb_id;
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
            })
    }

    function setPageNo(pNo) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pNo}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                props.dispatch({
                    type: 'Home-Movies',
                    item: data
                })
                setPages(pNo);
            })
    }

    var Obj = () => {
        if (props.homeMoviesList.length !== 0) {
            return (
                props.homeMoviesList[0].results.map((item) => (
                    <div className="col-md-3">
                        <div className="well text-center jumbotron">
                            <img className="imagre" src={imageURl + item.poster_path}></img>
                            <h5>{item.title}</h5>
                            <Link to="/movieDetails" onClick={(e) => { updateMovie(item) }} className="btn btn-primary">View</Link>
                            <button id="watch" onClick={(e) => { addToWatchList(item) }}>Add to watchlist</button>
                        </div>
                    </div>
                )))
        }
        return (
            <h1>none</h1>
        )

    }

    const Nav = () => {
        return (
            <nav>
                <span onClick={(e) => { setPageNo(1) }} id="span1">1</span>
                <span onClick={(e) => { setPageNo(2) }} id="span2">2</span>
                <span onClick={(e) => { setPageNo(3) }} id="span3">3</span>
                <span onClick={(e) => { setPageNo(4) }} id="span4">4</span>
                <span onClick={(e) => { setPageNo(5) }} id="span5">5</span>
                <span onClick={(e) => { setPageNo(6) }} id="span6">6</span>
                <span onClick={(e) => { setPageNo(7) }} id="span7">7</span>
                <span onClick={(e) => { setPageNo(8) }} id="span8">8</span>
                <span onClick={(e) => { setPageNo(9) }} id="span9">9</span>
            </nav>
        )
    }
    return (
        <div className="container" >
            <Nav />
            <div className="row">
                <Obj />
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        homeMoviesList: state.homeMoviesList,
        name: state.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);