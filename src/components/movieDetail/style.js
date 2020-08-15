import styled from 'styled-components'

export const MovieDetailContainer = styled.div``

export const DetailContainer = styled.div`
  padding: 0px 100px 20px 100px;
  @media only screen and  (max-device-width : 768px) {
    padding:0px 0px 20px 0px; 
  }
`

export const MovieDescriptionContainer = styled.div`
  display: flex;
  @media only screen and  (max-device-width : 768px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div``

export const DescriptionContainer = styled.div`
  padding-left: 50px;
  max-width: 800px;
  @media only screen and  (max-device-width : 768px) {
    padding:10px;
  }
`

export const TitleContainer = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: rgba(0,0,0,0.9);
  margin-bottom: 20px;
  @media only screen and  (max-device-width : 768px) {
    font-size: 16px;
  }
`

export const Year = styled.div`
  color: rgba(0,0,0,0.5); 
  margin-bottom: 10px;
  font-weight: 600; 
`

export const RatingContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`

export const Rating = styled.div``

export const VoteCount = styled.div`
  margin-left: 10px;
  color: rgba(0,0,0,0.5); 
  font-weight: 600;
`
export const VoteAverage = styled(VoteCount)`
  font-size: 18px;
  margin-left: 20px;
`
export const OverView = styled.div`
  color: rgba(0,0,0,0.5); 
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 28px;
`
export const CastTitle = styled.div`
  font-weight: 600;
  color: rgba(0,0,0,0.9);
  margin-bottom: 10px;
  font-size: 20px;
  margin-top: 30px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const SimlarMovieContainer = styled.div`
  padding: 0px 100px;
  @media only screen and  (max-device-width : 768px) {
    padding: 0px 10px;
  }
`

export const SimilarMovieTitle = styled(TitleContainer)``