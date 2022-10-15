import { injectReducer } from '../../../../store/store';

import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    titleHeader: 'Gợi ý cho bạn',
};

export const name = 'title';

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.titleHeader = action.payload;
        },
    },
});
injectReducer(name, slice.reducer);

export const { actions } = slice;

export default slice;
