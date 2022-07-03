import React, {LegacyRef, MutableRefObject, Ref, useRef, useState} from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { StyledReactPlayer } from './Styled/StyledPlayerComponents'
import {usePlayer} from "../hooks/usePlayer";

interface IProps extends ReactPlayerProps {}



export const MyReactPlayer: React.FC<React.PropsWithChildren<IProps>> = ({
 playerRef
}) => {
    const { handlePause, onDuration, removeFirstVideoHandler, playing, videos, onProgress } = usePlayer()






    return (
        <StyledReactPlayer>
            <ReactPlayer
                width={800}
                height={500}
                ref={playerRef}
                playbackRate={1}
                controls={true}
                onPause={() => handlePause(playerRef)}
                onDuration={onDuration}
                onProgress={onProgress}
                onEnded={removeFirstVideoHandler}
                playing={playing}
                url={videos?.[0]?.url.url}
            />
        </StyledReactPlayer>
    )
}
