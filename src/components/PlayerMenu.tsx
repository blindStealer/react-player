import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerMenuItems } from './PlayerMenuItems'
import { add } from '../store/reducers/PlayerReducer'
import { StyledButton, StyledInput } from './Styled/StyledUIComponents'
import {
    StyledAddPanel,
    StyledPlayerMenu,
} from './Styled/StyledPlayerComponents'

export const PlayerMenu = () => {
    const { videos } = useSelector((state) => state.player)
    const dispatch = useDispatch()
    const [url, setUrl] = useState('')

    const addVideo = () => {
        dispatch(add({ id: Date.now(), url }))
        setUrl('')
    }

    return (
        <StyledPlayerMenu>
            {videos.map((item) => {
                return <PlayerMenuItems key={item.id} item={item} />
            })}

            <StyledAddPanel>
                <StyledInput
                    value={url}
                    type="text"
                    placeholder={'вставьте ссылку'}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <StyledButton onClick={addVideo}>добавить видео</StyledButton>
            </StyledAddPanel>
        </StyledPlayerMenu>
    )
}
