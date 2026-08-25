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