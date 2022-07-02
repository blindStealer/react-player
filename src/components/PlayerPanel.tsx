import React from 'react'
import { PlayerIcons } from './PlayerIcons'
import { TimeLine } from './TimeLine'
import { StyledPanel } from './Styled/StyledPlayerComponents'
import {useSelector} from "react-redux";

export const PlayerPanel = () => {

    const { seconds, duration, progressbarSmooth } = useSelector(
        (state) => state.player
    )

    return (
        <StyledPanel>
            <PlayerIcons />
            <TimeLine
                width={`${(seconds / duration) * 100}%`}
                progressbarSmooth={progressbarSmooth}
            />
        </StyledPanel>
    )
}
