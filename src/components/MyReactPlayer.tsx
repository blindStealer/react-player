import React, { useRef, useState } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { removeFirstVideo } from '../store/reducers/PlayerReducer'
import { StyledReactPlayer } from './Styled/StyledPlayerComponents'
import { getPlayer } from '../Selectors'

interface IProps extends ReactPlayerProps {}

export const MyReactPlayer: React.FC<IProps> = ({
    onProgress,
    onDuration,
    handleEnd,
    handlePause,
    innerRef,
}) => {

    console.log('test git')

    const { videos, playing } = useSelector(getPlayer)
    const dispatch = useDispatch()
    console.log('playing', playing)

    const removeFirstVideoHandler = () => {
        handleEnd()
        dispatch(removeFirstVideo())
    }

    //

    return (
        <StyledReactPlayer>
            <ReactPlayer
                width={800}
                height={500}
                ref={innerRef}
                playbackRate={1}
                onPause={handlePause}
                onDuration={onDuration}
                onProgress={onProgress}
                controls={true}
                onEnded={removeFirstVideoHandler}
                playing={playing}
                url={videos?.[0]?.url.url}
            />
        </StyledReactPlayer>
    )
}
