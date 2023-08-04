export const global = {
    formatData: "it-IT",
}

export function DateToStringFormat(date: string) {
    return new Date(date).toLocaleString(global.formatData)
}
