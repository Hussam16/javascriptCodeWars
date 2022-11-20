function solution(number) {
    for (let index = 1; index < number; index++) {

        x.push(index)

    }
    y = x.filter(e => e % 3 == 0 || e % 5 == 0).reduce((a, b) => a + b)
    return y
}