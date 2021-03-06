module.exports = {
	extends: ["vue", "plugin:vue/base"],
	plugins: ['html'],
	globals: {
		Promise: true,
		module: true,
        require: true,
		describe: true,
		beforeEach: true,
		afterEach: true,
		it: true,
		before: true,
		fis: true,
		after: true,
		beforeAll: true,
		afterAll: true,
		expect: true,
		console: true,
		__dirname: true,
		global: true,
		$: true,
		Swiper: true,
		localStorage: true,
		FileReader: true,
		FormData: true
	},	
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"no-cond-assign": [
			"error",
			"except-parens"
		],
		"curly": [
			"error",
			"all"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"eqeqeq": [
			"error",
			"smart"
		],
		"no-unused-expressions": "error",
		"no-sequences": "error",
		"no-unreachable": "error",
		"wrap-iife": [
			"error",
			"outside"
		],
		"no-caller": "error",
		"quotes": [
			"error",
			"single"
		],
		"no-undef": "error",
		"no-unused-vars": "error",
		"operator-linebreak": [
			"error",
			"after"
		],
		"comma-style": [
			"error",
			"last"
		],
		"camelcase": [
			"error",
			{
				"properties": "never"
			}
		],
		"dot-notation": [
			"error",
			{
				"allowPattern": "^[a-z]+(_[a-z]+)+$"
			}
		],
		"max-len": [
			"error",
			{
				"code": 100,
				"ignoreComments": true
			}
		],
		"no-mixed-spaces-and-tabs": "error",
		"no-trailing-spaces": "error",
		"comma-dangle": [
			"error",
			"never"
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"keyword-spacing": [
			2
		],
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": [
			"error",
			{
				// Because of the `for ( ; ...)` requirement
				// "before": true,
				"after": true
			}
		],
		"space-infix-ops": "error",
		"eol-last": "error",
		"lines-around-comment": [
			"error",
			{
				"beforeLineComment": true
			}
		],
		"no-with": "error",
		"no-loop-func": "error",
		"no-spaced-func": "error",
		"space-unary-ops": [
			"error",
			{
				"words": false,
				"nonwords": false
			}
		],
		"no-multiple-empty-lines": 2
	}
}