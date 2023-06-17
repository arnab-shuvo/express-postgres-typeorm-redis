jest.mock("typeorm", () => {
  return {
    PrimaryColumn: () => jest.fn().mockReturnThis(),
    Column: () => jest.fn().mockReturnThis(),
    Entity: () => jest.fn().mockReturnThis(),
    ManyToOne: () => jest.fn().mockReturnThis(),
    OneToMany: () => jest.fn().mockReturnThis(),
    JoinColumn: () => jest.fn().mockReturnThis(),
  };
});
