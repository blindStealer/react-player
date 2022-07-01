import React from 'react'
import {
    TbPlayerPlay,
    TbPlayerPause,
    TbPlayerSkipBack,
    TbPlayerSkipForward,
    TbPlayerTrackNext,
    TbPlayerTrackPrev,
} from 'react-icons/tb'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { togglePlay } from '../store/reducers/PlayerReducer'

const StyledIcons = styled.div`
    display: flex;
    gap: 10px;
`

export const PlayerIcons = () => {
    const dispatch = useDispatch()
    const { playing, videos } = useSelector((state) => state.player)

    const iconProps = {
        size: 35,
    }

    const toggleHandler = () => {
        if (videos[0]) {
            dispatch(togglePlay(!playing))
        }
    }

    return (
        <StyledIcons>
            {playing ? (
                <TbPlayerPause onClick={toggleHandler} {...iconProps} />
            ) : (
                <TbPlayerPlay onClick={toggleHandler} {...iconProps} />
            )}

            {}

            <TbPlayerSkipBack {...iconProps} />
            <TbPlayerSkipForward {...iconProps} />
            <TbPlayerTrackNext {...iconProps} />
            <TbPlayerTrackPrev {...iconProps} />
        </StyledIcons>
    )
}
