const filterIsNumber = (array: Array<number> | undefined) => {
    const numbers = array?.filter((value: number | string) => {
        if (Number.isNaN(value)) {
        }
        return value;
    });
    return numbers;
};

const transformInArray = (string: string | undefined) => {
    const array = string?.split(",").map((value) => {
        const numberToArray = Number(value);
        return numberToArray;
    });
    return array;
};

const range = (start: number, end: number) => {
    const ans = [];

    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
};

export { range, filterIsNumber, transformInArray };
