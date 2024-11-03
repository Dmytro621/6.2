function test(text, letter) {
    let test = text.split('')
    return (test.filter(result => !letter.includes(result))
    .join('')
)
}

console.log(test('Как дела' , ['а', 'л']))

