import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use Node.js environment for backend testing
    environment: "node",
    // Allow using describe/it/expect without importing them
    globals: true,
    // Isolate test files to prevent state leakage
    isolate: true,
    // Timeout settings
    testTimeout: 10_000,
    // Use forks pool for better compatibility with native modules or Prisma
    pool: "forks",
    // Run setup files before each test file
    // setupFiles: ["./tests/setup.ts"],
  },
});
