import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and  (max-device-width : 768px) {
    justify-content: center;
  }
`

export const CardContent = styled.div`
  width: 600px;
  height: 350px;
  margin-right:70px;
  margin-bottom: 70px;
  display: flex;
  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media only screen and  (max-device-width : 768px) {
    margin-right:0px;
  }
`
export const CardImage = styled.div`
  flex: 1;
`
export const Image = styled.img`
   width: 100%;
   height: 100%;
`

export const CardDescription = styled.div`
  flex: 1;
  color: rgba(0,0,0,0.7);
  padding: 20px;
  overflow-y: auto;
`

export const CardTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    @media only screen and  (max-device-width : 768px) {
      font-size: 16px;
    }
`

export const CardStar = styled.div`
     display: flex;
     padding:10px 0px;
`

export const CardGenre = styled.div``

export const CardGenreItem = styled.div``

export const CardOverview = styled.div`
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  margin-top: 10px;
`