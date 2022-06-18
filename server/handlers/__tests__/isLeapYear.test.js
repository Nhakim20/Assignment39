const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("2001-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2021-01-01'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isLeapYear",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});

test("2020-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2020-01-01'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isLeapYear",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});