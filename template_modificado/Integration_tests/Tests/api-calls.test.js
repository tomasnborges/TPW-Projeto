const api_calls = require('../API-Calls/api-calls')

// GET EXAMPLE TESTS
test('TEST 1', async () => {
    const data = await api_calls.getExample(1);
    expect(data.status).toBe(200);
});

test('TEST 2', async () => {
    await expect(api_calls.getExample(200))
    .rejects
    .toThrow('error');
});

test('TEST 3', async () => {
    const data = await api_calls.getExample(1);
    expect(data.data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    });
});

test('TEST 4', async () => {
    const data = await api_calls.getExample(2);
    expect(data.data).not.toEqual({
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    });
});
  

//POST EXAMPLE TESTS
test('TEST 5', async () => {
    const data = await api_calls.postExample({
        "title": "quidem molestiae enim"
    });
    expect(data.status).toBe(201);
});

test('TEST 6', async () => {
    const data = await api_calls.postExample({
        "title": "quidem molestiae enim"
    });
    expect(data.data).toEqual({ 
        title: "quidem molestiae enim", 
        id: 101 
    });
});

test('TEST 7', async () => {
    const data = await api_calls.postExample({
        "title": "quidem molestiae enim", 
    });
    expect(data.data).not.toEqual({ 
        title: "quidem molestiae enim", 
        id: 102 
    });
});
  
test('TEST 8', async () => {
    await expect(api_calls.postExample(9))
    .rejects
    .toThrow('error');
});