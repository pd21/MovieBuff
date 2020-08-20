import styled from 'styled-components'

export const MainPageContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  position: relative;
  @media only screen and  (max-device-width : 320px) {
    min-width: 100vw;
  }

`
export const MainPageContentContainer = styled.div`
  padding: 0px 100px;

  @media only screen and  (max-device-width : 768px) {
    padding:0px;
  }
  @media only screen and  (max-device-width : 320px) {
    padding:0px;
  }
`

export const MainPageBanner = styled.div`
   height: 500px;
`

export const ImageContainer = styled.div`
  height: 500px;
`

export const TopRatedContainer = styled.div`
`

export const TopRatedTitle = styled.div`
  font-size: 32px;
  color:  #a72693;
  font-weight: 400;
  margin:25px 0px;
`