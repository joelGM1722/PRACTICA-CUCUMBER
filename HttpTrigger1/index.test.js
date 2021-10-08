const httpFunction = require('./index');
const context = require('../testing/context');

test('Http trigger example', async() => {
    const request = {
        query: { name: 'Joel' }
    };

    await httpFunction(context, request);
    expect(context.res.body).toEqual('Welcome, Joel');
    expect(context.log.mock.calls.length).toBe(1);
});