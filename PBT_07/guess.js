let secret =
    Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let guessedNumbers = [];

let maxAttempts = 7;

while (attempts < maxAttempts) {

    let input =
        prompt("Nhập số từ 1-100");

    let guess = Number(input);

    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1-100");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    attempts++;

    if (guess === secret) {

        alert(
            `Bạn đoán đúng sau ${attempts} lần!`
        );

        break;
    }

    else if (guess < secret) {
        alert("Cao hơn");
    }

    else {
        alert("Thấp hơn");
    }
}

if (attempts === maxAttempts &&
    !guessedNumbers.includes(secret)) {

    alert(
        `Bạn thua! Đáp án là ${secret}`
    );
}