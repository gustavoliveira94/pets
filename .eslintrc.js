module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser":  '@typescript-eslint/parser',
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react-hooks",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1,
        { "extensions": [".ts", ".tsx"] }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/interface-name-prefix": [
            "error",
            {
                "prefixWithI": "always"
            }
        ],
        "@typescript-eslint/camelcase": "off",
        "no-console": ["error", { allow: ["log"] }],
        "@typescript-eslint/no-explicit-any": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
    }
};