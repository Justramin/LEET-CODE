/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const result =[]
    const sortedScore = [...score].sort((a, b) => b - a);
    
    const rankMap = {};
    for (let i = 0; i < score.length; i++) {
        if (i === 0) rankMap[sortedScore[i]] = "Gold Medal";
        else if (i === 1) rankMap[sortedScore[i]] = "Silver Medal";
        else if (i === 2) rankMap[sortedScore[i]] = "Bronze Medal";
        else rankMap[sortedScore[i]] = (i + 1).toString();
    }

    for (let i = 0; i < score.length; i++) {
        result[i] = rankMap[score[i]];
    }

    return result;
};