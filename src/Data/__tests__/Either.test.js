const List = require('../List')
const { Pair } = require('../Pair')
const Either = require('../Either')
const { Just, Nothing } = require('../Maybe')
const { add } = require('../../App/Utils/mathUtils')
const { Left, Right } = require('../Either')

// CONSTRUCTORS

test ('Right', () => {
  expect (Right (3) .value) .toEqual (3)
  expect (Right (3) .isRight) .toEqual (true)
  expect (Right (3) .isLeft) .toEqual (false)
})

test ('Left', () => {
  expect (Left (3) .value) .toEqual (3)
  expect (Left (3) .isRight) .toEqual (false)
  expect (Left (3) .isLeft) .toEqual (true)
})

// EITHER.EXTRA

test ('fromLeft', () => {
  expect (Either.fromLeft (0) (Left (3)))
    .toEqual (3)
  expect (Either.fromLeft (0) (Right (3)))
    .toEqual (0)
})

test ('fromRight', () => {
  expect (Either.fromRight (0) (Right (3)))
    .toEqual (3)
  expect (Either.fromRight (0) (Left (3)))
    .toEqual (0)
})

test ('fromEither', () => {
  expect (Either.fromEither (Right (3)))
    .toEqual (3)
  expect (Either.fromEither (Left (0)))
    .toEqual (0)
})

test ('fromLeft_', () => {
  expect (Either.fromLeft_ (Left (3)))
    .toEqual (3)
  expect (() => Either.fromLeft_ (Right (3)))
    .toThrow ()
})

test ('fromRight_', () => {
  expect (Either.fromRight_ (Right (3)))
    .toEqual (3)
  expect (() => Either.fromRight_ (Left (3)))
    .toThrow ()
})

test ('eitherToMaybe', () => {
  expect (Either.eitherToMaybe (Left (3)))
    .toEqual (Nothing)
  expect (Either.eitherToMaybe (Right (3)))
    .toEqual (Just (3))
})

test ('maybeToEither', () => {
  expect (Either.maybeToEither ('test') (Just (3)))
    .toEqual (Right (3))
  expect (Either.maybeToEither ('test') (Nothing))
    .toEqual (Left ('test'))
})

test ('maybeToEither_', () => {
  expect (Either.maybeToEither_ (() => 'test') (Just (3)))
    .toEqual (Right (3))
  expect (Either.maybeToEither_ (() => 'test') (Nothing))
    .toEqual (Left ('test'))
})

// FUNCTOR

test ('fmap', () => {
  expect (Either.fmap (x => x * 2) (Right (3)))
    .toEqual (Right (6))
  expect (Either.fmap (x => x * 2) (Left ('test')))
    .toEqual (Left ('test'))
})

test ('mapReplace', () => {
  expect (Either.mapReplace (2) (Right (3)))
    .toEqual (Right (2))
  expect (Either.mapReplace (2) (Left ('test')))
    .toEqual (Left ('test'))
})

// BIFUNCTOR

test ('bimap', () => {
  expect (Either.bimap (add (5)) (add (10)) (Left (3)))
    .toEqual (Left (8))
  expect (Either.bimap (add (5)) (add (10)) (Right (3)))
    .toEqual (Right (13))
})

test ('first', () => {
  expect (Either.first (add (5)) (Left (3)))
    .toEqual (Left (8))
  expect (Either.first (add (5)) (Right (3)))
    .toEqual (Right (3))
})

test ('second', () => {
  expect (Either.second (add (10)) (Left (3)))
    .toEqual (Left (3))
  expect (Either.second (add (10)) (Right (3)))
    .toEqual (Right (13))
})

// APPLICATIVE

test ('pure', () => {
  expect (Either.pure (2)) .toEqual (Right (2))
})

test ('ap', () => {
  expect (Either.ap (Right (x => x * 2)) (Right (3)))
    .toEqual (Right (6))
  expect (Either.ap (Right (x => x * 2)) (Left ('b')))
    .toEqual (Left ('b'))
  expect (Either.ap (Left ('a')) (Right (3)))
    .toEqual (Left ('a'))
  expect (Either.ap (Left ('a')) (Left ('b')))
    .toEqual (Left ('a'))
})

// MONAD

test ('bind', () => {
  expect (Either.bind (Left (3))
                      (x => Right (x * 2)))
    .toEqual (Left (3))
  expect (Either.bind (Right (2))
                      (x => Right (x * 2)))
    .toEqual (Right (4))
  expect (Either.bind (Right (2))
                      (x => Left (x * 2)))
    .toEqual (Left (4))
})

test ('bindF', () => {
  expect (Either.bindF (x => Right (x * 2))
                       (Left (3)))
    .toEqual (Left (3))
  expect (Either.bindF (x => Right (x * 2))
                       (Right (2)))
    .toEqual (Right (4))
  expect (Either.bindF (x => Left (x * 2))
                       (Right (2)))
    .toEqual (Left (4))
})

test ('then', () => {
  expect (Either.then (Right (3)) (Right (2)))
    .toEqual (Right (2))
  expect (Either.then (Left ('a')) (Right (2)))
    .toEqual (Left ('a'))
  expect (Either.then (Right (3)) (Left ('b')))
    .toEqual (Left ('b'))
  expect (Either.then (Left ('a')) (Left ('b')))
    .toEqual (Left ('a'))
})

test ('kleisli', () => {
  expect (Either.kleisli (x => x > 5 ? Left ('too large') : Right (x))
                         (x => x < 0 ? Left ('too low') : Right (x))
                         (2))
    .toEqual (Right (2))
  expect (Either.kleisli (x => x > 5 ? Left ('too large') : Right (x))
                         (x => x < 0 ? Left ('too low') : Right (x))
                         (6))
    .toEqual (Left ('too large'))
  expect (Either.kleisli (x => x > 5 ? Left ('too large') : Right (x))
                         (x => x < 0 ? Left ('too low') : Right (x))
                         (-1))
    .toEqual (Left ('too low'))
})

test ('join', () => {
  expect (Either.join (Right (Right (3))))
    .toEqual (Right (3))
  expect (Either.join (Right (Left ('test'))))
    .toEqual (Left ('test'))
  expect (Either.join (Left (Left ('test'))))
    .toEqual (Left (Left ('test')))
})

test ('mapM', () => {
  expect (
    Either.mapM (x => x === 2 ? Left ("test") : Right (x + 1))
                (List.empty)
  )
    .toEqual (Right (List.empty))

  expect (
    Either.mapM (x => x === 2 ? Left ("test") : Right (x + 1))
                (List.fromElements (1, 3))
  )
    .toEqual (Right (List.fromElements (2, 4)))

  expect (
    Either.mapM (x => x === 2 ? Left ("test") : Right (x + 1))
                (List.fromElements (1, 2, 3))
  )
    .toEqual (Left ("test"))
})

test ('liftM2', () => {
  expect (Either.liftM2 (x => y => x + y) (Right (1)) (Right (2))) .toEqual (Right (3))
  expect (Either.liftM2 (x => y => x + y) (Left ("x")) (Right (2))) .toEqual (Left ("x"))
  expect (Either.liftM2 (x => y => x + y) (Right (1)) (Left ("y"))) .toEqual (Left ("y"))
  expect (Either.liftM2 (x => y => x + y) (Left ("x")) (Left ("y"))) .toEqual (Left ("x"))
})

// FOLDABLE

test ('foldr', () => {
  expect (Either.foldr (x => acc => x * 2 + acc) (2) (Right (3)))
    .toEqual (8)
  expect (Either.foldr (x => acc => x * 2 + acc) (2) (Left ('a')))
    .toEqual (2)
})

test ('foldl', () => {
  expect (Either.foldl (acc => x => x * 2 + acc) (2) (Right (3)))
    .toEqual (8)
  expect (Either.foldl (acc => x => x * 2 + acc) (2) (Left ('a')))
    .toEqual (2)
})

test ('toList', () => {
  expect (Either.toList (Right (3)))
    .toEqual (List.fromElements (3))
  expect (Either.toList (Left ('a')))
    .toEqual (List.fromElements ())
})

test ('fnull', () => {
  expect (Either.fnull (Right (3)))
    .toEqual (false)
  expect (Either.fnull (Left ('a')))
    .toEqual (true)
})

test ('length', () => {
  expect (Either.length (Right (3)))
    .toEqual (1)
  expect (Either.length (Left ('a')))
    .toEqual (0)
})

test ('elem', () => {
  expect (Either.elem (3) (Left ('a')))
    .toBeFalsy ()
  expect (Either.elem (3) (Right (2)))
    .toBeFalsy ()
  expect (Either.elem (3) (Right (3)))
    .toBeTruthy ()
})

test ('elemF', () => {
  expect (Either.elemF (Left ('a')) (3))
    .toBeFalsy ()
  expect (Either.elemF (Right (2)) (3))
    .toBeFalsy ()
  expect (Either.elemF (Right (3)) (3))
    .toBeTruthy ()
})

test ('sum', () => {
  expect (Either.sum (Right (3)))
    .toEqual (3)
  expect (Either.sum (Left ('a')))
    .toEqual (0)
})

test ('product', () => {
  expect (Either.product (Right (3)))
    .toEqual (3)
  expect (Either.product (Left ('a')))
    .toEqual (1)
})

test ('concat', () => {
  expect (Either.concat (Right (List.fromElements (1, 2, 3))))
    .toEqual (List.fromElements (1, 2, 3))
  expect (Either.concat (Left ('a')))
    .toEqual (List.fromElements ())
})

test ('concatMap', () => {
  expect (Either.concatMap (e => List.fromElements (e, e)) (Right (3)))
    .toEqual (List.fromElements (3, 3))
  expect (Either.concatMap (e => List.fromElements (e, e)) (Left ('a')))
    .toEqual (List.fromElements ())
})

test ('and', () => {
  expect (Either.and (Right (true)))
    .toEqual (true)
  expect (Either.and (Right (false)))
    .toEqual (false)
  expect (Either.and (Left ('a')))
    .toEqual (true)
})

test ('or', () => {
  expect (Either.or (Right (true)))
    .toEqual (true)
  expect (Either.or (Right (false)))
    .toEqual (false)
  expect (Either.or (Left ('a')))
    .toEqual (false)
})

test ('any', () => {
  expect (Either.any (e => e > 3) (Right (5)))
    .toEqual (true)
  expect (Either.any (e => e > 3) (Right (3)))
    .toEqual (false)
  expect (Either.any (e => e > 3) (Left ('a')))
    .toEqual (false)
})

test ('all', () => {
  expect (Either.all (e => e > 3) (Right (5)))
    .toEqual (true)
  expect (Either.all (e => e > 3) (Right (3)))
    .toEqual (false)
  expect (Either.all (e => e > 3) (Left ('a')))
    .toEqual (true)
})

test ('notElem', () => {
  expect (Either.notElem (3) (Left ('a')))
    .toBeTruthy ()
  expect (Either.notElem (3) (Right (2)))
    .toBeTruthy ()
  expect (Either.notElem (3) (Right (3)))
    .toBeFalsy ()
})

test ('find', () => {
  expect (Either.find (e => e > 3) (Right (5)))
    .toEqual (Just (5))
  expect (Either.find (e => e > 3) (Right (3)))
    .toEqual (Nothing)
  expect (Either.find (e => e > 3) (Left ('a')))
    .toEqual (Nothing)
})

// // EQ

// test ('equals', () => {
//   expect (Either.equals (Right (3)) (Right (3)))
//     .toBeTruthy ()
//   expect (Either.equals (Left ('a')) (Left ('a')))
//     .toBeTruthy ()
//   expect (Either.equals (Right (3)) (Right (4)))
//     .toBeFalsy ()
//   expect (Either.equals (Left ('a')) (Left ('b')))
//     .toBeFalsy ()
//   expect (Either.equals (Left ('a')) (Right (4)))
//     .toBeFalsy ()
//   expect (Either.equals (Right (3)) (Left ('a')))
//     .toBeFalsy ()
// })

// test ('notEquals', () => {
//   expect (Either.notEquals (Right (3)) (Right (5)))
//     .toBeTruthy ()
//   expect (Either.notEquals (Left ('a')) (Left ('b')))
//     .toBeTruthy ()
//   expect (Either.notEquals (Left ('a')) (Right (5)))
//     .toBeTruthy ()
//   expect (Either.notEquals (Right (3)) (Left ('a')))
//     .toBeTruthy ()
//   expect (Either.notEquals (Right (2)) (Right (2)))
//     .toBeFalsy ()
//   expect (Either.notEquals (Left ('a')) (Left ('a')))
//     .toBeFalsy ()
// })

// ORD

test ('gt', () => {
  expect (Either.gt (Right (1)) (Right (2)))
    .toBeTruthy ()
  expect (Either.gt (Right (1)) (Right (1)))
    .toBeFalsy ()
  expect (Either.gt (Right (1)) (Left (1)))
    .toBeFalsy ()
  expect (Either.gt (Left (2)) (Right (2)))
    .toBeTruthy ()
  expect (Either.gt (Left (1)) (Left (2)))
    .toBeTruthy ()
  expect (Either.gt (Left (1)) (Left (1)))
    .toBeFalsy ()
})

test ('lt', () => {
  expect (Either.lt (Right (3)) (Right (2)))
    .toBeTruthy ()
  expect (Either.lt (Right (1)) (Right (1)))
    .toBeFalsy ()
  expect (Either.lt (Right (3)) (Left (3)))
    .toBeTruthy ()
  expect (Either.lt (Left (3)) (Right (2)))
    .toBeFalsy ()
  expect (Either.lt (Left (2)) (Left (1)))
    .toBeTruthy ()
  expect (Either.lt (Left (1)) (Left (1)))
    .toBeFalsy ()
})

test ('gte', () => {
  expect (Either.gte (Right (1)) (Right (2)))
    .toBeTruthy ()
  expect (Either.gte (Right (2)) (Right (2)))
    .toBeTruthy ()
  expect (Either.gte (Right (2)) (Right (1)))
    .toBeFalsy ()
  expect (Either.gte (Right (1)) (Left (1)))
    .toBeFalsy ()
  expect (Either.gte (Right (2)) (Left (1)))
    .toBeFalsy ()
  expect (Either.gte (Right (1)) (Left (2)))
    .toBeFalsy ()
  expect (Either.gte (Left (1)) (Right (2)))
    .toBeTruthy ()
  expect (Either.gte (Left (1)) (Right (1)))
    .toBeTruthy ()
  expect (Either.gte (Left (1)) (Right (0)))
    .toBeTruthy ()
  expect (Either.gte (Left (1)) (Left (2)))
    .toBeTruthy ()
  expect (Either.gte (Left (1)) (Left (1)))
    .toBeTruthy ()
  expect (Either.gte (Left (1)) (Left (0)))
    .toBeFalsy ()
})

test ('lte', () => {
  expect (Either.lte (Right (3)) (Right (2)))
    .toBeTruthy ()
  expect (Either.lte (Right (2)) (Right (2)))
    .toBeTruthy ()
  expect (Either.lte (Right (2)) (Right (3)))
    .toBeFalsy ()
  expect (Either.lte (Right (1)) (Left (2)))
    .toBeTruthy ()
  expect (Either.lte (Right (1)) (Left (1)))
    .toBeTruthy ()
  expect (Either.lte (Right (1)) (Left (0)))
    .toBeTruthy ()
  expect (Either.lte (Left (1)) (Right (2)))
    .toBeFalsy ()
  expect (Either.lte (Left (1)) (Right (1)))
    .toBeFalsy ()
  expect (Either.lte (Left (1)) (Right (0)))
    .toBeFalsy ()
  expect (Either.lte (Left (1)) (Left (2)))
    .toBeFalsy ()
  expect (Either.lte (Left (1)) (Left (1)))
    .toBeTruthy ()
  expect (Either.lte (Left (1)) (Left (0)))
    .toBeTruthy ()
})

// SEMIGROUP

// test ('mappend', () => {
//   expect(Just (List.fromElements(3)).mappend(Just (List.fromElements(2))))
//     .toEqual(Just (List.fromElements(3, 2)))
//   expect(Just (List.fromElements(3)).mappend(Nothing))
//     .toEqual(Just (List.fromElements(3)))
//   expect(Nothing.mappend(Just (List.fromElements(2))))
//     .toEqual(Nothing)
//   expect(Nothing.mappend(Nothing))
//     .toEqual(Nothing)
// })

// EITHER FUNCTIONS

test ('isLeft', () => {
  expect (Either.isLeft (Left (3)))
    .toBeTruthy ()
  expect (Either.isLeft (Right (3)))
    .toBeFalsy ()
})

test ('isRight', () => {
  expect (Either.isRight (Left (3)))
    .toBeFalsy ()
  expect (Either.isRight (Right (3)))
    .toBeTruthy ()
})

test ('either', () => {
  expect (Either.either (add (10)) (add (1)) (Right (3)))
    .toEqual (4)
  expect (Either.either (add (10)) (add (1)) (Left (3)))
    .toEqual (13)
})

test ('lefts', () => {
  expect (Either.lefts (List.fromElements (Left (3), Left (2), Right (2), Right (3), Left (4), Right (4))))
    .toEqual (List.fromElements (3, 2, 4))
})

test ('rights', () => {
  expect (Either.rights (List.fromElements (Left (3), Left (2), Right (2), Right (3), Left (4), Right (4))))
    .toEqual (List.fromElements (2, 3, 4))
})

test ('partitionEithers', () => {
  expect (Either.partitionEithers (List.fromElements (Left (3), Left (2), Right (2), Right (3), Left (4), Right (4))))
    .toEqual (Pair.fromBinary (List.fromElements (3, 2, 4), List.fromElements (2, 3, 4)))
})

// CUSTOM EITHER FUNCTIONS

test ('isEither', () => {
  expect (Either.isEither (4)) .toEqual (false)
  expect (Either.isEither (Right (4))) .toEqual (true)
  expect (Either.isEither (Left ('test'))) .toEqual (true)
})