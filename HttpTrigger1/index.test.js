const functions = require('./index');
const context = require('../testing/context');

test('Http trigger example', async() => {
    const request = {
        query: { name: 'Joel' }
    };

    var iterations = 100000;
    console.time('FUNCTION #1');
    for (var i = 0; i < iterations; i++) {
        await functions(context, request);
    }
    console.timeEnd('FUNCTION #1');
    expect(context.res.body).toEqual('Welcome, Joel');
    expect(context.log.mock.calls.length).toBe(100000);
});