import React from 'react'
import { StyledLine, StyledTimeLine } from './Styled/StyledPlayerComponents'

export const TimeLine = (props) => {
    return (
        <StyledTimeLine {...props}>
            <StyledLine {...props} />
        </StyledTimeLine>
    )
}
