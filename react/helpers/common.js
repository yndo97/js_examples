import { curry, cond, T, set, compose, remove, insert, nth } from 'ramda';
import { isNotEmpty, isNotNil, notEqual } from 'ramda-extension';
import { Either, Maybe } from 'ramda-fantasy';

const of = curry((value, functor) => functor.of(value));
const getOrElse = curry((value, functor) => functor.getOrElse(value));
const map = curry((f, functor) => functor.map(f));

const safeNotNil = cond([
    [isNotNil, Maybe.Just],
    [T, () => Maybe.Nothing()],
]);

const isConditionRight = curry(condition => cond([
    [condition, Either.Right],
    [T, Either.Left],
]));

const setObjLens = curry((lensProp, getValue, obj) => set(lensProp, getValue(obj), obj));

const move = curry((fromIdx, toIdx, list) => compose(
    insert(toIdx, nth(fromIdx, list)),
    remove(fromIdx, 1),
)(list));
