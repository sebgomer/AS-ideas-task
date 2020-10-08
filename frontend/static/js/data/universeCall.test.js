import { fetchUniverse } from "./universeCall.js";

it('returns the name of the universe', async () => {
    const name = await fetchUniverse();  // Run the function
    expect(name).toEqual('Cigar');  // Expect the result
  });