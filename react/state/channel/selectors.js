import { createSelector } from 'reselect';
import {
    identity,
    memoizeWith,
    path,
} from 'ramda';

const pathToChannels = path(['messenger', 'channels']);

const channelsSelector = createSelector(
    pathToChannels,
    identity,
);

const getChannelById = createSelector(
    channelsSelector,
    channels => memoizeWith(identity, channelId => getChannel(channelId)(channels)),
);

export {
    getChannelById
}
