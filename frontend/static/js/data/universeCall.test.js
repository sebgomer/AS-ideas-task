import { fetchUniverse } from "./universeCall.js";

it('returns the title of the first album', async () => {
    const name = await fetchUniverse();  // Run the function
    expect(name).toEqual('Cigar');  // Expect the result
  });