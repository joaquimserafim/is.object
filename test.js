/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test  = require('tape')

const isObject = require('.')

test('scenarios should return true', (assert) => {

  function Test () {}

  assert.deepEqual(isObject({}), true, 'with a plain JS object')
  assert.deepEqual(isObject(new Test()), true, 'with a new Class')
  assert.deepEqual(isObject(Object.create({})), true, 'with Object.create')
  assert.deepEqual(isObject(/isObject/), true, 'with a regex')

  assert.end()
})

test('scenarios should return false', (assert) => {

  assert.deepEqual(isObject(null), false, 'with null value')
  assert.deepEqual(isObject([]), false, 'with an array')
  assert.deepEqual(isObject(), false, 'with undefined value')
  assert.deepEqual(isObject(true), false, 'with a boolean')
  assert.deepEqual(isObject(Function), false, 'with a Function')
  assert.deepEqual(isObject('123'), false, 'with a string value')
  assert.deepEqual(isObject(123), false, 'with a number value')

  assert.end()
})
