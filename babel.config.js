module.exports = {
	presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/react', {
      runtime: 'automatic'
    }]
	]
}
