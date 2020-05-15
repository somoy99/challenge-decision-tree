// RPC Alpha > $2.5 AND NET >+$30
const fiNode1 = (rpcAlpha, net) => rpcAlpha > 2.5 && net > 30

// Social Clicks > Social Clicks cut off ANDNon-Social Clicks > Non-Social Clicks cut off
const seNode1Y = (
    socialClicks,
    socialClicksCutOff,
    nonSocialClicks,
    nonSocialClicksCutOff
) => (socialClicks > socialClicksCutOff) && (nonSocialClicks, nonSocialClicksCutOff)


// Social Clicks > Social Clicks cut off ANDNon-Social Clicks > Non-Social Clicks cut off
const seNode1N = (
    socialClicks,
    socialClicksCutOff,
    nonSocialClicks,
    nonSocialClicksCutOff
) => (socialClicks > socialClicksCutOff) && (nonSocialClicks, nonSocialClicksCutOff)

// Current Bid Cap  < Max(EBRPC*Factor, Avg.(RPC Alpha, RPC Beta))
const thNode1Y = (
    currentBidCap,
    ebRpc,
    rpcAlpha,
    rpcBeta,
    factor
) => currentBidCap < Math.max(ebRpc * factor, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

// Current Bid Cap < Max(EBRPC, Avg.(RPC Alpha, RPC Beta))
const thNode1N = (
    currentBidCap,
    ebRpc,
    rpcAlpha,
    rpcBeta,
) => currentBidCap < Math.max(ebRpc, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

// Current Bid Cap  < Min(EBRPC*Factor, Avg.(RPC Alpha, RPC Beta))
const thNode2Y = (
    currentBidCap,
    ebRpc,
    rpcAlpha,
    rpcBeta,
    factor
) => currentBidCap < Math.min(ebRpc * factor, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

// Current Bid Cap < Min(EBRPC, Avg.(RPC Alpha, RPC Beta))
const thNode2N = (
    currentBidCap,
    ebRpc,
    rpcAlpha,
    rpcBeta,
) => currentBidCap < Math.min(ebRpc, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

// Increase Bid Cap by 1%
const foNode1Y = (bidCap) => bidCap + (bidCap / 100) * 1
// Decrease Bid Cap by 4%
const foNode1N = (bidCap) => bidCap - (bidCap / 100) * 4

// Increase Bid Cap by 1%
const foNode2Y = (bidCap) => bidCap + (bidCap / 100) * 1
// Bid Cap = Max(EBRPC, Avg.(RPC Alpha,S1RPC Beta))
const foNode2N = (
    ebRpc,
    rpcAlpha,
    rpcBeta
) => Math.max(ebRpc, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

// Increase Bid Cap by 5%
const foNode3Y = (bidCap) => bidCap + (bidCap / 100) * 5
// Decrease Bid Cap by 5%
const foNode3N = (bidCap) => bidCap - (bidCap / 100) * 5

// Increase Bid Cap by 2%
const foNode4Y = (bidCap) => bidCap + (bidCap / 100) * 2
// Bid Cap = Min(EBRPC, Avg.(RPC Alpha, RPC Beta))
const foNode4N = (
    ebRpc,
    rpcAlpha,
    rpcBeta
) => Math.min(ebRpc, [rpcAlpha, rpcBeta].reduce((a, b) => a + b, 0) / 2)

const nodes = [
    fiNode1,
    [
        seNode1Y,
        seNode1N,
    ],
    [
        thNode1Y,
        thNode1N,
        thNode2Y,
        thNode2N,
    ],
    [
        foNode1Y,
        foNode1N,
        foNode2Y,
        foNode2N,
        foNode3Y,
        foNode3N,
        foNode4Y,
        foNode4N,
    ]
]

module.exports = nodes;
