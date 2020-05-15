const request = require('supertest')
const server = require('../index')

afterAll(done => {
    server.close();
    done();
});


describe('bid endpoint', () => {
  it('check for api validity', async () => {
    const res = await request(server)
      .post('/bid-cap')
      .send({
        "rpcAlpha": 3.0,
        "rpcBeta": 3.2,
        "ebRpc": 25,
        "net": 31 ,
        "nonSocialClicks": 0.30 ,
        "nonSocialClicksCutOff": 0.26,
        "socialClicks": 0.69 ,
        "socialClicksCutOff": 0.71 ,
        "currentBidCap": 50 ,
        "factor": 1.45
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    expect(res.body.data).toEqual(25)

  })


  it('check for api invalidity', async () => {
    const res = await request(server)
      .post('/bid-cap')
      .send({
        "rpcAlpha": "string",
        "rpcBeta": 3.2,
        "ebRpc": 25,
        "net": 31 ,
        "nonSocialClicks": 0.30 ,
        "nonSocialClicksCutOff": 0.26,
        "socialClicks": 0.69 ,
        "socialClicksCutOff": 0.71 ,
        "currentBidCap": 50 ,
        "factor": 1.45
      })
    expect(res.statusCode).toEqual(400)
  })


})
