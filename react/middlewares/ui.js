import {
    path, cond, compose, prop,
} from 'ramda';
import { map } from '../../helpers/commonHelpers';
import { isUserFocusOnChat, pathToActiveChannelId } from '../../helpers/messengerHelpers/channelHelpers';

const showNotificationMiddleware = ({ getState }) => next => (action) => {
    if (action.type === uiTypes.SHOW_NOTIFICATION) {
        const state = getState();
        const { id } = userSelectors.getUserData(state);
        const isWindowFocus = uiSelectors.getIsWindowFocus(state);
        const channel = pathToActiveChannelId(state);
        cond([
            [checkNotificationType(TYPES_NOTIFICATION.MESSAGE), compose(
                map(compose(
                    showMessageWhenUserNotAuthor(id, showNotification),
                    prop('payload'),
                )),
                isUserFocusOnChat(isWindowFocus, channel, path(['payload', 'message', 'channel_id'])),
            )],
        ])(action);
    }
    next(action);
};

