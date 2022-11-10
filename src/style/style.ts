import styled from "styled-components"
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export const GoogleXs=styled.div`
width:50px;
height:50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
@media (min-width: 601px) {
    display: none;
  }
`
export const StyledLink=styled(Link)`
text-align: center;
&:hover{
  cursor: pointer;
}
`
export const StyledAnchor=styled.a`
text-decoration: none;
font-size: 20px;
font-weight: 700;
`
export const GoogleSm=styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding:12px 10px;
transition: transform 500ms;
&:hover{
  cursor: pointer;
  transform: scale(1.03);
  /* transform:rotate(2deg); */
}
text-align: center;
border-radius: 5px;
margin-bottom: 6px;

`
export const GridSvg=styled(Grid)`

@media (max-width: 601px) {
    display: none;
  }

`
// width: ${(props)=>props.cod&&'20px'};
// &:hover{
//     cursor: pointer;
// }