// https://qiita.com/toshimin/items/5f13c3b4c28825219231
export const yyyymmdd = (date: string | Date) => {
  const dt = typeof date === "string" ? new Date(date) : date
  return (
    dt.getFullYear()
    + '-' + ('00' + (dt.getMonth()+1)).slice(-2)
    + '-' + ('00' + dt.getDate()).slice(-2)
  )
}
