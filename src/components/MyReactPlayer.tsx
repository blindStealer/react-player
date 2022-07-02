import React, {LegacyRef, MutableRefObject, Ref, useRef, useState} from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { StyledReactPlayer } from './Styled/StyledPlayerComponents'
import {usePlayer} from "../hooks/usePlayer";

interface IProps extends ReactPlayerProps {}



export const MyReactPlayer: React.FC<React.PropsWithChildren<IProps>> = ({

}) => {
    const {innerRef, handlePause, onDuration, removeFirstVideoHandler, playing, videos, onProgress } = usePlayer()

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
