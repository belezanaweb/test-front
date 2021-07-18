export const dateToday = () => {
    const date = new Date()

    function addZero(dayOrMonth: number) {
        return dayOrMonth <= 9 ? "0" + dayOrMonth : dayOrMonth
    }

    return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`
}