exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda and Github on Cloud9 with AWS command unzip properly!"),
  }
  return response
}
