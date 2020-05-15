const nodes = require('./bid-cap.helper')

const calculateBidCap = (req) => {

    const {
        rpcAlpha,
        rpcBeta,
        ebRpc,
        net,
        nonSocialClicks,
        nonSocialClicksCutOff,
        socialClicks,
        socialClicksCutOff,
        currentBidCap,
        factor
    } = req.body;

    var bidCap = 0;

    if (nodes[0](rpcAlpha, net)) {
        if (nodes[1][0](socialClicks,
            socialClicksCutOff,
            nonSocialClicks,
            nonSocialClicksCutOff)) {
            if (nodes[2][0](
                currentBidCap,
                ebRpc,
                rpcAlpha,
                rpcBeta,
                factor
            )) {
                bidCap = nodes[3][0](currentBidCap)


            } else {
                bidCap = nodes[3][1](currentBidCap)

            }
        } else {
            if (nodes[2][1](
                currentBidCap,
                ebRpc,
                rpcAlpha,
                rpcBeta,
                factor
            )) {
                bidCap = nodes[3][2](currentBidCap);

            } else {
                bidCap = nodes[3][3](
                    ebRpc,
                    rpcAlpha,
                    rpcBeta
                )

            }
        }
    }
    else {
        if (nodes[1][1](socialClicks,
            socialClicksCutOff,
            nonSocialClicks,
            nonSocialClicksCutOff)) {
            if (nodes[2][2](
                currentBidCap,
                ebRpc,
                rpcAlpha,
                rpcBeta,
                factor
            )) {
                bidCap = nodes[3][4](currentBidCap);

            } else {
                bidCap = nodes[3][5](currentBidCap)

            }
        } else {
            if (nodes[2][3](
                currentBidCap,
                ebRpc,
                rpcAlpha,
                rpcBeta,
                factor
            )) {
                bidCap = nodes[3][6](currentBidCap);

            } else {
                bidCap = nodes[3][7](
                    ebRpc,
                    rpcAlpha,
                    rpcBeta
                )

            }
        }
    }
    return bidCap;
}

const bipCapController = async (req, res) => {
    const bidCap = calculateBidCap(req);
    return res.status(200).json({ data: { bidCap: bidCap } })
}

module.exports = { bipCapController, calculateBidCap }
