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
