import {
    mergeDeepByPath,
} from '../../utils/helpers/ramdaStateHelpers';

const reducer = handleActions({
    [types.SET_MEMBER_TO_CHANNEL]: mergeDeepByPath(['channels', 'groupChannels'],
        ({ payload }) => ({
            entities: {
                ...{ [payload.data.result.channel.id]: payload.data.result.channel },
            },
        })),
    },
    initialState
);

export default reducer;
