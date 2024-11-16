import type {Config} from 'jest';

const config: Config = {
    testEnvironment: "jsdom",
    setupFiles: ["<rootDir>/jest.setup.ts"],
    testEnvironmentOptions: {
        customExportConditions: [''],
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.(css|saas|scss)?$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {'\\.(css|less)$': 'identity-obj-proxy',},
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75,
        },
    },
};

export default config;
