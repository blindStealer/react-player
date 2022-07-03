import React, {forwardRef} from 'react'
import { PlayerIcons } from './PlayerIcons'
import { TimeLine } from './TimeLine'
import { StyledPanel } from './Styled/StyledPlayerComponents'
import {useSelector} from "react-redux";

export const PlayerPanel = ({getPercents, innerRef, ...props}) => {



    const { seconds, duration, progressbarSmooth } = useSelector(
        (state) => state.player
    )

    return (
        <StyledPanel>
            <PlayerIcons />
            <TimeLine
                width={`${(seconds / duration) * 100}%`}
                progressbarSmooth={progressbarSmooth}
                getPercents={getPercents}
                innerRef={innerRef}
            />
        </StyledPanel>
    )
}
