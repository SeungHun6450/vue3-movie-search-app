exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Hun',
      age: 27,
      email: 'toffg6450@naver.com'
    })
  }
}