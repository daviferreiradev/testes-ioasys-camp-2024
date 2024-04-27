const request = require("supertest");

describe("PokeAPI Pokemons", () => {
  it("/get a valid pokemon", async () => {
    const response = await request("https://pokeapi.co/api/v2").get(
      `/pokemon/${"ditto"}`
    );

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("ditto");
    expect(response.body.id).toBe(132);
    expect(response.body.abilities).toBeDefined();
    // expect(response.body.types).toBeGreaterThan(0);
  });

  it("/get a invalid pokemon", async () => {
    const response = await request("https://pokeapi.co/api/v2").get(
      `/pokemon/${"teste"}`
    );

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
});