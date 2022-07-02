import React from 'react'
import { MyReactPlayer } from './components/MyReactPlayer'
import { PlayerMenu } from './components/PlayerMenu'
import { PlayerPanel } from './components/PlayerPanel'
import {
    StyledApp,
    StyledWrapper,
} from './components/Styled/StyledPlayerComponents'

const App = () => {

    return (
        <StyledApp>
            <StyledWrapper>
                <MyReactPlayer
                />
                <PlayerPanel/>
            </StyledWrapper>
            <PlayerMenu />
        </StyledApp>
    )
}

export default App
