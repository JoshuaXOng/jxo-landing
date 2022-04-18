"use strict";

// It is novel to note that these .config files often
// can be written in package.json instead.

module.exports = {
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    modulePathIgnorePatterns: [
        'cypress'
    ],
    collectCoverageFrom: [
        'src/**'
    ]
}