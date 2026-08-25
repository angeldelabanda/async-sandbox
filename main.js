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