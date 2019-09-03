import {
    fork, select, takeLatest,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Either, Tuple } from 'ramda-fantasy';
import {
    compose,
} from 'ramda';
import { sagasManager } from '../../utils';

function* handleTextareaChanged({ payload }) {
    const { channelId } = payload;
    yield delay(500);

    const channel = yield select(state => channelSelectors.getChannelById(state)(channelId));

    const isChannelHasUnreadMessage = compose(
        isConditionRight(compose(lt(0), Tuple.snd)),
        Tuple(channelId),
        getUnreadCount,
    );

    const getAndUpdateChannel = compose(updateChannel, Tuple.fst);

    yield Either.either(always(false), getAndUpdateChannel)(isChannelHasUnreadMessage(channel));
}


function* watchTextareaChanged() {
    yield takeLatest('TEXTAREA_CHANGED', handleTextareaChanged);
}

sagasManager.addSagaToRoot(function* watcher() {
    yield fork(watchTextareaChanged);
});
