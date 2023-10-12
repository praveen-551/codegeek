async function asynFunction() {
  return "async1";
}

async function asynFunction1() {
  return "async3";
}
asynFunction().then((res) => console.log(res));
asynFunction1().then((res) => console.log(res));

// async with arrow syntax
let firstAsyncFunc = async () => {
  const result = await asynFunction();
  console.log(result);
};
firstAsyncFunc();

// async function using await
async function getAll() {
  const [result1, result2] = await Promise.all([
    asynFunction(),
    asynFunction1(),
  ]);
  console.log(result1 + " " + result2);
}
getAll();

async function asyncF1() {
  const res = await asynFunction();
  return res;
}

// calling using then

asyncF1().then((res) => {
  console.log("----------res ------------", res);
});
