function pipe(...fns) {

    return value =>
        fns.reduce(
            (acc, fn) => fn(acc),
            value
        );
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));