const { handler } = require('../index');

test('returns error if ID is missing', async () => {
    const response = await handler({});
    expect(response.statusCode).toBe(400);
});

test('returns success if ID is provided', async () => {
    const response = await handler({ id: '123' });
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).message).toBe('User ID: 123');
});