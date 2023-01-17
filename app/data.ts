export const data = [];

for (let idx = 0; idx < 100; idx++) {
    data.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: idx
    });
}
