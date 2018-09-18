process.on("unhandledRejection", reason => {
  // eslint-disable-next-line no-console
  console.log(reason);
});
