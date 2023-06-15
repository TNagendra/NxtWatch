import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default null

export const LinkContainer = styled.li`
  width: 100%;
  height: 45px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    min-width: 500px;
  }
`
export const MenuLink = styled(Link)`
  width: 100%;
  padding: 10px 160px;
  display: flex;
  text-decoration: none;
  @media (min-width: 768px) {
    padding: 10px 10px;
    justify-content: flex-start;
  }
`
export const LinkName = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  //margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`
