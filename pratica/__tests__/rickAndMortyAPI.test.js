const request = require("supertest");

describe("Rick and Morty API", () => {
  it("should return a valid character", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/character/1`
    );

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Rick Sanchez");
    expect(response.body.status).toBe("Alive");
    expect(response.body.species).toBe("Human");
  });

  it("should return 404 for an invalid character", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/character/999999`
    );

    expect(response.status).toBe(404);
  });

  it("should return the default number of characters per page", async () => {
    const response = await request("https://rickandmortyapi.com/api").get("/character");
    
    expect(response.status).toBe(200);
    expect(response.body.results.length).toBeLessThanOrEqual(20);
  });

  it("should filter characters by status and species", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      "/character/?status=alive&species=Alien"
    );
    
    expect(response.status).toBe(200);
    expect(response.body.results.every(r => r.status === "Alive" && r.species === "Alien")).toBeTruthy();
  });

  it("should filter episodes by name", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/episode/?name=Pilot`
    );

    expect(response.status).toBe(200);
    expect(response.body.results[0].name).toBe("Pilot");
  });

  it("should get a location", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/location/3`
    );

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Citadel of Ricks");
  });

  it("should return a specific episode", async () => {
    const response = await request("https://rickandmortyapi.com/api").get("/episode/28");
    
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("The Ricklantis Mixup");
    expect(response.body.episode).toBe("S03E07");
  });

  it("should return 404 for an invalid episode", async () => {
    const response = await request("https://rickandmortyapi.com/api").get("/episode/9999");
    
    expect(response.status).toBe(404);
  });
});
