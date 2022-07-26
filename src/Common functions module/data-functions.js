function normalizeDate(date) {
    let dateDay = date[date.length-2] + date[date.length-1]
    let monthDate = date[date.length-5] + date[date.length-4]
    let yearDate = date[date.length-8] + date[date.length-7]
    return `${dateDay}.${monthDate}.${yearDate}`
  }

function getDate() {
    let now = new Date()
    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    return now.getFullYear() + "-" + (month) + "-" + (day)
}

export {normalizeDate, getDate}