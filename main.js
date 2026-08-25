const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

document.getElementById("btn-delay").addEventListener("click", async () => {
  const out = document.getElementById("out-delay");

  out.textContent = "Waiting 2 seconds...";

  await wait(2000);

  out.textContent = "Done!";
});

const fakeApi = (label, ms) => wait(ms).then(() => `[${label}]`);

document.getElementById("btn-chain").addEventListener("click", () => {
  const out = document.getElementById("out-chain");

  out.textContent = "Starting chain...\n";

  fakeApi("Login", 1000)
    .then((result) => {
      out.textContent += result + "\n";
      return fakeApi("Fetch Profile", 1000);
    })
    .then((result) => {
      out.textContent += result + "\n";
      return fakeApi("Fetch Posts", 1000);
    })
    .then((result) => {
      out.textContent += result + "\nAll done!";
    });
});

document.getElementById("btn-async").addEventListener("click", async () => {
  const out = document.getElementById("out-async");

  out.textContent = "Starting async...\n";

  const login = await fakeApi("Login", 1000);
  out.textContent += login + "\n";

  const profile = await fakeApi("Fetch Profile", 1000);
  out.textContent += profile + "\n";

  const posts = await fakeApi("Fetch Posts", 1000);
  out.textContent += posts + "\n";

  out.textContent += "All done!";
});

document.getElementById("btn-fetch").addEventListener("click", async () => {
  const out = document.getElementById("out-fetch");

  out.textContent = "Loading...";

  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    out.textContent = data.joke;
  } catch (error) {
    out.textContent = `Error: ${error.message}`;
  }
});