export default (req, res) => {
  try {
    res.status(200).send("Nice! Node JS with TypeScript");
  } catch (ex) {
    console.log(`Error in the api ${ex}`);
  }
};
