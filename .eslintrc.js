module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        // "plugin:import-order/recommended"
    ],
    "plugins": [
        "react-hooks"
    ],
    // "extends": [
    //     "plugin:prettier/recommended",
    //     "prettier/flowtype",
    //     "prettier/react",
    //     "prettier/standard"
    // ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "function-paren-newline": "off",
        "react/jsx-one-expression-per-line": "off",
        // "react/jsx-one-expression-per-line": "always",
        "object-curly-newline": "off",
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "spaced-comment": "error",
        "no-console": "warn",
        "consistent-return": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "no-process-exit": "off",
        "no-param-reassign": "off",
        "no-return-await": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "prefer-destructuring": ["off", { "object": true, "array": false }],
        "no-unused-vars": ["warn", { "argsIgnorePattern": "req|res|next|val" }],
        "no-plusplus": "off",
        "prefer-object-spread": "off",
        "no-bitwise":"off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
        // "sort-imports": "off",
        // "import/order": "off",
        // "import-order/import-order": 2
        // "import/order":"error"
    }
};

// module.exports = {
//     "extends": ["aitbnb", "prettier"],
//     "plugins": ["prettier"], 
//     "rules": {
//         "prettier/prettier": "error",
//         "no-unused-vars": "error",

//     }
// }