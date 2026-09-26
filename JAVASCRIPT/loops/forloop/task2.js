for (let i = 1; i <= 30; i++) {

    if (i === 23) {
        break;
    }

    if (i % 5 === 0) {
        continue;
    }

    if (i % 2 === 0) {
        console.log(i);
    }
}