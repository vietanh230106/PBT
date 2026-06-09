Câu C1 – Refactor

Code ≤ 10 dòng:

const processOrders = orders =>
    orders
        .filter(
            o =>
                o.status === "completed" &&
                o.total > 100000
        )
        .map(
            ({
                id,
                customer,
                total
            }) => ({
                id,
                customer,
                total,
                discount: total * 0.1,
                finalTotal: total * 0.9
            })
        )
        .sort(
            (a,b) =>
                b.finalTotal - a.finalTotal
        );
Câu C2 – miniArray
const miniArray = {

    map(arr, fn) {

        const result = [];

        for (
            let i = 0;
            i < arr.length;
            i++
        ) {
            result.push(
                fn(arr[i], i, arr)
            );
        }

        return result;
    },

    filter(arr, fn) {

        const result = [];

        for (
            let i = 0;
            i < arr.length;
            i++
        ) {

            if (
                fn(arr[i], i, arr)
            ) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    reduce(
        arr,
        fn,
        initialValue
    ) {

        let accumulator =
            initialValue;

        for (
            let i = 0;
            i < arr.length;
            i++
        ) {

            accumulator =
                fn(
                    accumulator,
                    arr[i],
                    i,
                    arr
                );
        }

        return accumulator;
    }
};
Test
console.log(
    miniArray.map(
        [1,2,3],
        x => x * 2
    )
);

console.log(
    miniArray.filter(
        [1,2,3,4],
        x => x > 2
    )
);

console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a + b,
        0
    )
);