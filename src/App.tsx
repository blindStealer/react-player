import React, {useRef, useState} from 'react'
import { MyReactPlayer } from './components/MyReactPlayer'
import { PlayerMenu } from './components/PlayerMenu'
import { PlayerPanel } from './components/PlayerPanel'
import {
    StyledApp,
    StyledWrapper,
} from './components/Styled/StyledPlayerComponents'


const App = () => {


    const ref = useRef<HTMLDivElement>(null)

    const playerRef = useRef( )


    console.log('playeRRRRRRRRef.current', playerRef.current)


    const getPercents = (e) => {

        console.table('e' , e)

        if(!ref.current) return


        // начало блока относительно экрана = 278 px
        // конец блока относительно экрана = 778 px
        // общая ширина блока = 500 px
        // clientX = координата клика

        // clientX - 278

        const {left, width} = ref.current.getBoundingClientRect()
        console.log(left) //  начало блока относительно экрана

        let resultLength = e.clientX - left

        console.log('resultLength' , resultLength) // длина от начала блока до того места на который кликнул пользователь


        console.table('getBoundingClientRect',ref.current.getBoundingClientRect() )



        // реф возвращает координаты нач точки diva , ты берешь координату клика и вычитаешь из нёё начальную точку этого дива, после этого у тебя получается количество пикселей с начала таймлайна. Ты делишь ширину таймлайна на количество пикселей с начала таймлайна, это число от 0 до 1, это число нужно поделить в проценты
        console.log('111111', left)

        const percents = resultLength/ width

        console.log('percentsssssss', percents)


        console.log('playerRef.currentInFunction' , playerRef.current)




        playerRef.current.seekTo(percents, 'fraction')
        playerRef.current.getDuration()

    }





    return (
        <StyledApp>
            <StyledWrapper>
                <MyReactPlayer
                    playerRef={playerRef}
                />
                <PlayerPanel getPercents={getPercents} innerRef={ref}  />
            </StyledWrapper>
            <PlayerMenu />
        </StyledApp>
    )
}

export default App
