const bidCapController = require('../controllers/bip-cap.controller')

test('a. Increase Bid Cap by 1%', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 3.2,
            "ebRpc": 25,
            "net": 31 ,
            "nonSocialClicks": 0.30 ,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69 ,
            "socialClicksCutOff": 0.68 ,
            "currentBidCap": 5 ,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(5.05);
});

test('b. Decrease Bid Cap by 4%', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 3.2,
            "ebRpc": 25,
            "net": 31 ,
            "nonSocialClicks": 0.30 ,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69 ,
            "socialClicksCutOff": 0.68 ,
            "currentBidCap": 5 ,
            "factor": 0
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(4.8);
});

test('c. Increase Bid Cap by 1%', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 3.2,
            "ebRpc": 25,
            "net": 31 ,
            "nonSocialClicks": 0.30 ,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69 ,
            "socialClicksCutOff": 0.71 ,
            "currentBidCap": 5 ,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(5.05);
});

test('d. Bid Cap = Max(EBRPC, Avg.(RPC Alpha, RPC Beta))', () => {
    var req = {
        body: {
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
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(25);
});

test('e. Increase Bid Cap by 5%', () => {
    var req = {
        body: {
            "rpcAlpha": 6.0,
            "rpcBeta": 6.2,
            "ebRpc": 25,
            "net": 29,
            "nonSocialClicks": 0.30,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69,
            "socialClicksCutOff": 0.68,
            "currentBidCap": 5,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(5.25);
});

test('f. Decrease Bid Cap by 5%', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 3.2,
            "ebRpc": 25,
            "net": 29,
            "nonSocialClicks": 0.30,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69,
            "socialClicksCutOff": 0.68,
            "currentBidCap": 5,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(4.75);
});

test('g. Increase Bid Cap by 2%', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 13.2,
            "ebRpc": 25,
            "net": 29,
            "nonSocialClicks": 0.30,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69,
            "socialClicksCutOff": 0.70,
            "currentBidCap": 5,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(5.1);
});

test('h. Bid Cap = Min(EBRPC, Avg.(RPC Alpha, RPC Beta))', () => {
    var req = {
        body: {
            "rpcAlpha": 3.0,
            "rpcBeta": 3.2,
            "ebRpc": 25,
            "net": 29,
            "nonSocialClicks": 0.30,
            "nonSocialClicksCutOff": 0.26,
            "socialClicks": 0.69,
            "socialClicksCutOff": 0.70,
            "currentBidCap": 5,
            "factor": 1.45
        }
    }
    expect(
        bidCapController.calculateBidCap(req)
    ).toBe(3.1);
});

