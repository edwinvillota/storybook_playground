import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: false,
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage/unit',
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['index.ts', 'styles.ts'],
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^ts(.*)$': '<rootDir>/src/ts$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
  },
  modulePaths: ['src/components'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
