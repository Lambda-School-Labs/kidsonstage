module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        }, 
    "rules": {
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
        "react/jsx-filename-extension": "off",
        "jsx-a11y/anchor-is-valid": "off", 
        "jsx-a11y/alt-text": "off"  
            
    },
    "parser": "babel-eslint",                                                                         
};