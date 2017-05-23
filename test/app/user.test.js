'use strict'

const test = require('tap').test
const userPath = require.resolve('../../app/user')
const mockRequire = require('mock-require')

test('gets a real name', (t) => {
  t.plan(1)

  const mockData = mockRequire('../../app/data/users.json', [{
      id: 'foo',
      name: 'bar'
    }]
  )
  // Given the way the module we are testing works, we would want to
  // clear it out and re-require it in every test. This is demonstrating that.
  delete require.cache[userPath]
  const user = require(userPath)

  const name = user.getRealName('foo')
  t.is(name, 'bar')

  mockRequire.stop(userPath)
})
