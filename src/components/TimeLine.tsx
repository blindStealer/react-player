import React, {useRef, useState} from 'react'
import { StyledLine, StyledTimeLine } from './Styled/StyledPlayerComponents'

export const TimeLine = (props) => {

    console.log('props' , props)

    return (
        <StyledTimeLine ref={props.innerRef} {...props} onClick={props.getPercents} >
            <StyledLine {...props}  />
        </StyledTimeLine>
    )
}
