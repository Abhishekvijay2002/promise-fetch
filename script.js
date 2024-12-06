
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
function randomNumberPromise() {
    const randomNumber = generateRandomNumber();
    return new Promise((resolve, reject) => {
        if (randomNumber < 2) {
            resolve("Operation Success");
        } else {
            reject("Operation Failed");
        }
    });
}

function fetchApiData() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .catch((error) => console.error("Error fetching API:", error));
}

document.getElementById("promiseButton").addEventListener("click", () => {
    randomNumberPromise()
        .then((message) => {
            document.getElementById("result").innerText = `Promise Result: ${message}`;
        })
        .catch((error) => {
            document.getElementById("result").innerText = `Promise Result: ${error}`;
        });

    fetchApiData().then((data) => {
        document.getElementById("apiResult").innerText = `API Data: ${JSON.stringify(data)}`;
    });
});

document.getElementById("asyncAwaitButton").addEventListener("click", async () => {
    try {
        const message = await randomNumberPromise();
        document.getElementById("result").innerText = `Promise Result: ${message}`;
    } catch (error) {
        document.getElementById("result").innerText = `Promise Result: ${error}`;
    }

    try {
        const data = await fetchApiData();
        document.getElementById("apiResult").innerText = `API Data: ${JSON.stringify(data)}`;
    } catch (error) {
        console.error("Error fetching API:", error);
    }
});
