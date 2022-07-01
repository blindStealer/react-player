import React, { useEffect, useRef, useState } from 'react'
import { MyReactPlayer } from './components/MyReactPlayer'
import { PlayerMenu } from './components/PlayerMenu'
import { PlayerPanel } from './components/PlayerPanel'
import {
    StyledApp,
    StyledWrapper,
} from './components/Styled/StyledPlayerComponents'
import { useDispatch, useSelector } from 'react-redux'
import {
    setDuration,
    setProgressbarSmooth,
    setSeconds,
} from './store/reducers/PlayerReducer'

const App = () => {
    const dispatch = useDispatch()
    const { seconds, duration, progressbarSmooth } = useSelector(
        (state) => state.player
    )

    console.log('progressbarSmooth', progressbarSmooth)
    const innerRef = useRef()

    const onProgress = (e) => {
        console.log(e)
        dispatch(
            setProgressbarSmooth(
                e.playedSeconds - seconds >= 0 ? e.playedSeconds - seconds : 0
            )
        )

        // loaded:
        // loadedSeconds:
        // played:
        // playedSeconds:

        dispatch(setSeconds(e.playedSeconds))
    }

    const onDuration = (e) => {
        console.log('eeeeeee', e)
        dispatch(setDuration(e))
    }
    const handleEnd = () => {
        setSeconds(duration)
    }

    const handlePause = (e) => {
        const asd = innerRef
        console.log('pause', asd.current.getCurrentTime())
        dispatch(setSeconds(asd.current.getCurrentTime()))
        dispatch(setProgressbarSmooth(999999999))
    }

    return (
        <StyledApp>
            <StyledWrapper>
                <MyReactPlayer
                    onDuration={onDuration}
                    onProgress={onProgress}
                    handleEnd={handleEnd}
                    ref={innerRef}
                    handlePause={handlePause}
                />
                <PlayerPanel
                    seconds={seconds}
                    duration={duration}
                    progressbarSmooth={progressbarSmooth}
                />
            </StyledWrapper>
            <PlayerMenu />
        </StyledApp>
    )
}

export default App
