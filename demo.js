const cheeriox = require('./');

const code = `
	<template type="test">
		<button name='test' onClick={
			() => {
				alert(1);
			}
		}>I am a button</button>
	</template>
`;

const $ = cheeriox.load(code, {
	decodeEntities: false,
});

console.log($('template').attr('type'));
console.log($('template').html());