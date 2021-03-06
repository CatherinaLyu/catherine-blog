module.exports = {
	modulePaths: [
		"<rootDir>/src/"
	],
	moduleNameMapper: {
		"\.(css|less)$": '<rootDir>/__test__/NullModule.js'
	},
	collectCoverage: true,
	coverageDirectory: "<rootDir>/src/",
	coveragePathIgnorePatterns: [
		"<rootDir>/__test__/"
	],
	coverageReporters: ["html"],
};
