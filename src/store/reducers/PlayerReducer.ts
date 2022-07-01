import { createSlice } from '@reduxjs/toolkit'

export interface IState {
    url: string
    videos: any[]
    playing: boolean

    // 1 jul

    seconds: string | number
    duration: string | number
    progressbarSmooth: string | number
}

const initialState: IState = {
    url: '',
    videos: [],
    playing: true,
    seconds: 0,
    duration: 0,
    progressbarSmooth: 0,
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        add: (state, action) => {
            state.videos.push({
                id: Date.now(),
                url: action.payload,
            })
        },

        removeVideo: (state, action) => {
            state.videos = state.videos.filter((item) => {
                return item.id !== action.payload
            })
        },

        togglePlay: (state, action) => {
            state.playing = action.payload
        },

        removeFirstVideo: (state) => {
            state.videos.shift()
        },

        setSeconds: (state, action) => {
            state.seconds = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
        setProgressbarSmooth: (state, action) => {
            state.progressbarSmooth = action.payload
        },
    },
})

export const {
    add,
    removeVideo,
    togglePlay,
    removeFirstVideo,
    setSeconds,
    setDuration,
    setProgressbarSmooth,
} = playerSlice.actions
export default playerSlice.reducer
