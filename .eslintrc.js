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
        "prefixWithI": "always",
    }
};