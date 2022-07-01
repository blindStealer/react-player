import React from 'react'
import { PlayerIcons } from './PlayerIcons'
import { TimeLine } from './TimeLine'
import { StyledPanel } from './Styled/StyledPlayerComponents'

export const PlayerPanel = ({ seconds, duration, progressbarSmooth }) => {
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
