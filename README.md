# Hotel Reservation API

Tech Stack: Node, Express, Typescript, Vitest, Supertest, Biome.

## Development Setup

1. Clone the project.
2. Install the dpendencies with `pnpm`.

   ```bash
   pnpm install
   ```
3. Run the app.

   ```bash
   pnpm dev
   ```
4. Access the `/health` endpoint to confirm the app is running and ready for requests.

## Running Tests

1. Run tests.

   ```bash
   pnpm test
   ```

2. Check linting/formatting errors with Biome.

   ```bash
   pnpm check

   # You can also fix (some) biome errors
   pnpm fix
   ```
3. Check type errors.

   ```bash
   pnpm checktypes
   ```

