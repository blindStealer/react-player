import React from 'react'
import { useDispatch } from 'react-redux'
import { removeVideo } from '../store/reducers/PlayerReducer'
import styled from 'styled-components'
import { StyledButton } from './Styled/StyledUIComponents'
import { StyledMenuItems } from './Styled/StyledPlayerComponents'

export const PlayerMenuItems = ({ item }) => {
    const removeHandler = () => {
        dispatch(removeVideo(item.id))
    }

    const dispatch = useDispatch()

    console.log(item.id)

    console.log('item.url', item.url.url)

    let sliced = item.url.url.slice(12, 70)

    if (sliced.length < item.url.url.length) {
        sliced += '...'
    }

    console.log('sliced', sliced)

    return (
        <StyledMenuItems>
            <div>
                <div>{sliced}</div>
            </div>

            <StyledButton onClick={removeHandler}>удалить</StyledButton>
        </StyledMenuItems>
    )
}
