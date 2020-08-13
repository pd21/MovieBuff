import React from 'react'

import Navbar from '../navbar/navbar'
import ContentSlider from '../contentslider/contentslider'
import CardMain from '../cardMain/cardMain'

import { getRating } from '../../utils/getRating'

import {
    MovieDetailContainer,
    DetailContainer,
    MovieDescriptionContainer,
    ImageContainer,
    DescriptionContainer,
    TitleContainer,
    Year,
    RatingContainer,
    Rating,
    VoteCount,
    VoteAverage,
    OverView,
    CastTitle,
    Image,
    SimlarMovieContainer,
    SimilarMovieTitle,
} from './style'

class MovieDetail extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            movieData : '',
            movieCast : '',
            simlarMovie: '',
            location: window.location.pathname,
        }
    }

    apiCall = (movieId) => {
        const movieDetailApi = `https://api.themoviedb.org/3/movie/${movieId}?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US`
        const movieCastApi = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=08f31c809a8ba972b87a3748c6885970`
        const simlarMovieApi = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US&page=1`

        fetch(movieDetailApi)
        .then(data => data.json())
        .then(data => this.setState({
            movieData: data
        }))

        fetch(movieCastApi)
        .then(data => data.json())
        .then(data => this.setState({
            movieCast: data
        }))

        fetch(simlarMovieApi)
        .then(data => data.json())
        .then(data => this.setState({
            simlarMovie: data.results
        }))

    }

    componentDidMount(){
        const movieId = window.location.pathname.split('/').pop()
        this.apiCall(movieId)
    }

    componentDidUpdate(){
        const id = window.location.pathname.split('/').pop()
        if(window.location.pathname !== this.state.location){
            this.setState({
                location: window.location.pathname
            },()=>{
                this.apiCall(id)
            })
        }

    }

    render(){
        console.log('I am called')
        const { movieData, movieCast, simlarMovie } = this.state

        const movieCastArray = movieCast.cast && movieCast.cast.slice(0,10)
        return(
            <MovieDetailContainer>
                <Navbar />
                <DetailContainer>
                    {movieData && <MovieDescriptionContainer>
                        <ImageContainer>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}/>
                        </ImageContainer>
                        <DescriptionContainer>
                            <TitleContainer>{movieData.title}</TitleContainer>
                            <Year>{movieData.release_date.split('-')[0]}</Year>
                            <RatingContainer>
                                <Rating>{getRating(movieData.vote_average)}</Rating>
                                <VoteCount>( {movieData.vote_count} )</VoteCount>
                                <VoteAverage>{movieData.vote_average} / 10 </VoteAverage>  
                            </RatingContainer>
                            <OverView>{movieData.overview}</OverView>
                            <CastTitle>Cast and Crew</CastTitle>
                            <ContentSlider sliderArray={movieCastArray} />
                        </DescriptionContainer>
                    </MovieDescriptionContainer>
                    } 
                </DetailContainer>
                {simlarMovie && <SimlarMovieContainer>
                    <SimilarMovieTitle>You might also like</SimilarMovieTitle>
                    <CardMain cardMaindata={simlarMovie}/>
                </SimlarMovieContainer>}
            </MovieDetailContainer>
        )
    }
}

export default MovieDetail