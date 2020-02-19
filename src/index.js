module.exports = function reverse (n) {
    let answer = Math.sqrt(n**2);
    return Number(answer.toString().split('').reverse().join(''))
}
