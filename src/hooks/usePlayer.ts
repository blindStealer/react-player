import {useDispatch, useSelector} from "react-redux";
import {getPlayer} from "../Selectors";
import {useRef} from "react";
import {removeFirstVideo, setDuration, setProgressbarSmooth, setSeconds} from "../store/reducers/PlayerReducer";

export const usePlayer = () => {
    const { videos, playing, seconds, duration,percents } = useSelector(getPlayer)
    const dispatch = useDispatch()

    console.log('percents' , percents)


    const innerRef = useRef()


    const onProgress = (e) => {
        console.log(e)
        dispatch(
            setProgressbarSmooth(
                e.playedSeconds - seconds >= 0 ? e.playedSeconds - seconds : 0
            )
        )

        // loaded:
        // loadedSeconds:
        // played:
        // playedSeconds:

        dispatch(setSeconds(e.playedSeconds))
    }

    const onDuration = (e) => {
        console.log('eeeeeee', e)
        dispatch(setDuration(e))
    }
    const handleEnd = () => {
        setSeconds(duration)
    }

    const handlePause = () => {
        const asd = innerRef
        console.log('asd.current', asd.current)
        console.log('pause', asd.current)
        asd.current.seekTo(0.89, 'fraction')
        dispatch(setSeconds(asd.current.getCurrentTime()))
        dispatch(setProgressbarSmooth(999999999))
    }


    const removeFirstVideoHandler = () => {
        handleEnd()
        dispatch(removeFirstVideo())
    }
    return {
        innerRef, handleEnd, handlePause, onDuration, removeFirstVideoHandler,  playing, videos, onProgress
    }
}
