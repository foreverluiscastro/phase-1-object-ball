function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
}

const allPlayers = {...gameObject().home.players, ...gameObject().away.players}

function numPointsScord(soughtName) {
    for (const player in allPlayers) {
        // debugger
        if (player === soughtName) {
            return allPlayers[player].points
        }
    }
}

function shoeSize(soughtName) {
    for (const player in allPlayers) {
        if (player === soughtName) {
            return allPlayers[player].shoe
        }
    }
}

function teamColors(soughtTeam) {
    for (const team in gameObject()) {
        // debugger
        if (gameObject()[team].teamName === soughtTeam) {
            // debugger
            return gameObject()[team].colors
        }
    }
}

function teamNames() {
    let arr = []
    for (const key in gameObject()) {
        arr.push(gameObject()[key].teamName)
    }
    return arr
}

function playerNumbers(soughtTeam) {
    let arr = []
    for (const team in gameObject()) {
        if (gameObject()[team].teamName === soughtTeam) {
            for (const player in gameObject()[team].players) {
                // debugger
                arr.push(gameObject()[team].players[player].number)
            }
        }
    }
    return arr
}

function playerStats(soughtName) {
    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            // debugger
            if (player === soughtName) {
                return gameObject()[team].players[player]
            }
        }
    }
}

function bigShoeRebounds() {
    let found =  {shoe: 0, rebounds: 0}
    for (const player in allPlayers) {
        if (allPlayers[player].shoe > found.shoe) {
            found.shoe = allPlayers[player].shoe
            found.rebounds = allPlayers[player].rebounds
        }
    }
    return found.rebounds
}

function mostPointsScored() {
    let found =  {name: "", points: 0}
    for (const player in allPlayers) {
        if (allPlayers[player].points > found.points) {
            found.name = player
            found.points = allPlayers[player].points
        }
    }
    return found.name
}

function winningTeam() {
    let home = [];
    let away = [];
    for (const team in gameObject()) {
        if (team === "home") {
            // debugger
            for (const player in gameObject()[team].players) {
                // debugger
                home.push(gameObject()[team].players[player])
            }
        } else {
            for (const player in gameObject()[team].players) {
                // debugger
                away.push(gameObject()[team].players[player])
            }
        }
    }
    let homeTotal = home.reduce(
        (previousValue, currentValue) => previousValue + currentValue.points,
        0
    )
    let awayTotal = away.reduce(
        (previousValue, currentValue) => previousValue + currentValue.points,
        0
    )
    console.log(homeTotal)
    console.log(awayTotal)
    if (homeTotal > awayTotal) {
        return gameObject().home.teamName
    } else {
        return gameObject().away.teamName
    }
    // debugger
}

function playerWithLongestName() {
    let longestName = ""
    for (const player in allPlayers) {
        // debugger
        if (player.length > longestName.length) {
            longestName = player
        }
    }
    // debugger
    return longestName
}

function doesLongestNameStealATon() {
    const longestName  = playerWithLongestName()
    let playerWithMostSteals = {name: "", steals: 0}
    for (const player in allPlayers) {
        if (allPlayers[player].steals > playerWithMostSteals.steals) {
            playerWithMostSteals.name = player
            playerWithMostSteals.steals = allPlayers[player].steals
        }
    }
    if (playerWithMostSteals.name === longestName) {
        return true
    }
    return false
}