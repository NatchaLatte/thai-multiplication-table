export function toThaiNumber(number: number): string {
    const thaiDigits = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    return number.toString().split('').map(digit => thaiDigits[parseInt(digit)]).join('');
}

export function getTable(multiplicand: number, multiplierStart: number = 1, multiplierEnd: number = 12): string[] {
    const result: string[] = [];
    for (let multiplier = multiplierStart; multiplier <= multiplierEnd; multiplier++) {
        result.push(`${toThaiNumber(multiplicand)} x ${toThaiNumber(multiplier)} = ${toThaiNumber(multiplicand * multiplier)}`);
    }
    return result;
};