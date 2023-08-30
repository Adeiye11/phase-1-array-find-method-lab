function superbowlWin(array) {
    let result = array.find((obj) => { return obj.result === "W" })
    if (result) {
        return result.year
    } else {
        return undefined
    }
}