import {Component} from 'react'

import {
  MainBgContainer,
  Heading,
  LanguageTabsListContainer,
  ButtonTabList,
  TabButton,
  LanguageTypeGreetingContainer,
  LanguageImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLingualGreetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  changeLanguageAccordingly = id => {
    this.setState({activeTabId: id})
  }

  getUrlAndAltText = () => {
    const {activeTabId} = this.state

    const imageUrlObject = languageGreetingsList.find(
      eachObject => eachObject.id === activeTabId,
    )
    const imageUrlGet = imageUrlObject.imageUrl

    const altText = imageUrlObject.imageAltText

    return {imageUrlGet, altText}
  }

  render() {
    const {activeTabId} = this.state

    const {imageUrlGet, altText} = this.getUrlAndAltText()

    return (
      <MainBgContainer>
        <Heading>Multilingual Greetings</Heading>
        <LanguageTabsListContainer>
          {languageGreetingsList.map(eachObject => {
            const {id, buttonText} = eachObject

            const displayTheLanguageGreeting = () => {
              this.changeLanguageAccordingly(id)
            }

            const isActive = activeTabId === id

            return (
              <ButtonTabList key={id}>
                <TabButton
                  type="button"
                  onClick={displayTheLanguageGreeting}
                  isActive={isActive}
                >
                  {buttonText}
                </TabButton>
              </ButtonTabList>
            )
          })}
        </LanguageTabsListContainer>
        <LanguageTypeGreetingContainer>
          <LanguageImage src={imageUrlGet} alt={altText} />
        </LanguageTypeGreetingContainer>
      </MainBgContainer>
    )
  }
}

export default MultiLingualGreetings
