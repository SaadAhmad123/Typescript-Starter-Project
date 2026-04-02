import { afterAll, beforeAll } from 'vitest';

beforeAll(() => {
  console.log('Vitest Start');
});

afterAll(async () => {
  console.log('Vitest End');
});
