const scoreSchema = require('../schemas/score.schemas')

describe("Zod validation", () => {
  test("Should pass validation with a valid data", () => {
    const validData = {
      name: "test",
      score: 123,
    };
    expect(() => scoreSchema.parse(validData).not.toThow());
  });

  test("Should fail validation if name is missing", () => {
    const invalidData = {
      score: 123,
    };
    expect(() => scoreSchema.parse(invalidData).toThow("Name is required"));
  });

  test("Should fail validation with an empty name", () => {
    const invalidData = {
      name: "",
      score: 123,
    };
    expect(() => scoreSchema.parse(invalidData).toThow("Name is required"));
  });

  test("Should fail validation if name is not a string", () => {
    const invalidData = {
      name: 123,
      score: 123,
    };
    expect(() =>
      scoreSchema.parse(invalidData).toThow("Name must be a string")
    );
  });

  test("Should fail validation with a name longer than 30 characters", () => {
    const invalidData = {
      name: "testtesttesttesttesttesttesttest",
      score: 123,
    };
    expect(() =>
      scoreSchema.parse(invalidData).toThow("Max length 30 characters")
    );
  });

  test("Should fail validation if score is missing", () => {
    const invalidData = {
      name: "test",
    };
    expect(() => scoreSchema.parse(invalidData).toThow("Score is required"));
  });

  test("Should fail validation if score is a string", () => {
    const invalidData = {
      name: "test",
      score: "",
    };
    expect(() =>
      scoreSchema.parse(invalidData).toThow("Score must be a number")
    );
  });

  test("Should fail validation if score is not a integer", () => {
    const invalidData = {
      name: "test",
      score: 123.1,
    };
    expect(() =>
      scoreSchema.parse(invalidData).toThow("Score must be a integer")
    );
  });

  test("Should fail validation if score is not a positive number", () => {
    const invalidData = {
      name: "test",
      score: -123,
    };
    expect(() =>
      scoreSchema.parse(invalidData).toThow("Score must be a positive number")
    );
  });
});
