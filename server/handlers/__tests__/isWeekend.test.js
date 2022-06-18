const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("2022-06-11", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-11'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("2022-06-12", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-12'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("2022-06-13", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-13'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});