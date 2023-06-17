import { Connection } from "typeorm";

export const createConnection = jest.fn();
const mockResponse = [
  {
    state: "selling",
    timeStamp: "2022-09-11T23:21:38.000Z",
    vehicleId: {
      id: 3,
      make: "VW",
      model: "GOLF",
    },
  },
];

export const getRepository = jest.fn().mockReturnValue({
  createQueryBuilder: jest.fn().mockReturnValue({
    // Mock the necessary methods or properties of the query builder
    where: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue(mockResponse),
    // ...
  }),
});

// const mockConnection: Partial<Connection> = {
//   getRepository: jest.fn().mockReturnValue({
//     createQueryBuilder: jest
//       .fn()
//       .mockReturnValue(mockQueryBuilder as SelectQueryBuilder<User>),
//   }),
// };

export const mockConnection: Partial<Connection> = {
  getRepository: jest.fn().mockReturnValue({
    createQueryBuilder: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue(mockResponse),
    }),
  }),
};
