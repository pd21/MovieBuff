import styled from 'styled-components'

export const MainPageSearchContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and  (max-device-width : 768px) {
    padding: 10px 
  }
  @media only screen and  (max-device-width : 608px) {
    padding: 10px 
  }
`
export const MainPageTitle = styled.div`
  font-size: 28px;
  color: #a72693;
  font-weight: 600;

  @media only screen and  (max-device-width : 768px) {
    font-size: 16px;
  }
  @media only screen and  (max-device-width : 608px) {
    font-size: 16px;
  }
`
export const SearchBarContainer = styled.div`
  position: relative;
`

export const InputBox = styled.input`
  margin-left: 91px;
  padding: 5px 10px;
  width: 650px;
  height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border:1px solid #c0c0c0;;
  border-radius: 10px;
  font-size: 16px;
  text-transform: capitalize;

  &:hover{
    border:1px solid #c0c0c0;;
  }
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    width: 500px;
    margin-left:15px;
  }

  @media only screen and  (max-device-width : 768px) {
    margin-left: 15px;
    width: 450px;
  }
  @media only screen and  (max-device-width : 608px) {
    margin-left: 5px;
    width: 250px;
    height: 30px;
  }
    
`
export const FontAwesome = styled.i`
  font-size: 22px;
  position: absolute;
  top: 9px;
  right: 10px;
  color: #24a19c;
  @media only screen and  (max-device-width : 608px) {
    top: 5px;
  }
`