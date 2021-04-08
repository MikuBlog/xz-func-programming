let template = "<div>{{ name }}</div><div>{{ age }}</div><div>{{ sex }}</div>"
const templateTransfer = (template, data) => template.replace(/\{\{\s*([_a-zA-Z]+)\s*\}\}/g, (str, p) => data[p])
console.log(transfer(template, {
	name: 'xuanzai',
	age: 20,
	sex: '男'
}))
