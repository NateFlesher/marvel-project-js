import { createSlice } from "@reduxjs/toolkit";

export interface HeroState {
    name: string,
    description: string,
    comics: number,
    img_head: string,
    date_created: ''
}


const initialState: HeroState = {
    name: 'Droney McDroneFace',
    description: '',
    comics: 0,
    img_head: '',
    date_created: ''
}


const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseComics: (state, action) => { state.comics = action.payload },
        chooseImgHead: (state, action) => { state.img_head = action.payload },
        chooseDateCreated: (state, action) => { state.date_created = action.payload },
    }
})


//Export Reducer
export const reducer = rootSlice.reducer
export const {
    chooseName,
    chooseDescription,
    chooseComics,
    chooseImgHead,
    chooseDateCreated,
} = rootSlice.actions;