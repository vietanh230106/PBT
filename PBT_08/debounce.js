function debounce(fn, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(
            () => fn(...args),
            delay
        );
    };
}

const search =
    debounce(query => {

        console.log(
            "Searching:",
            query
        );

    }, 500);

search("ip");
search("iphone");
search("iphone 16");