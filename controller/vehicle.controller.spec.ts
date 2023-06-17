import { getMockReq, getMockRes } from "@jest-mock/express";
import { getVehicleByTime } from "./vehicle.controller";
import { mockConnection } from "./__mocks__/typeorm";

beforeAll(async () => {
  jest.mock("typeorm", () => ({
    createConnection: jest.fn().mockResolvedValue(mockConnection),
  }));
});

describe("Space test suite", () => {
  it("My Space Test", async () => {
    const req = getMockReq({
      params: { id: "3" },
      body: { timestamp: "2022-09-12 12:41:41+00" },
    });
    const { res } = getMockRes();
    const data = await getVehicleByTime(req, res);
    console.log(data, "[==asd");
  });
});
