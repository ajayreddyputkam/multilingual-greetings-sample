import styled from 'styled-components'

export const MainBgContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`

export const LanguageTabsListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const ButtonTabList = styled.li`
  list-style-type: none;
  margin-left: 15px;
  margin-right: 15px;
`

export const TabButton = styled.button`
  min-width: 100px;
  height: 40px;
  border: 2px solid #db1c48;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border-radius: 20px;
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`

export const LanguageTypeGreetingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`

export const LanguageImage = styled.img`
  width: 350px;
`
