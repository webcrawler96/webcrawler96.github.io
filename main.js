import * as showdown from 'showdown';

const converter = new showdown.Converter();
const text = '#hello, markdown!';
console.log(converter.makeHtml(text));
console.log(text)
