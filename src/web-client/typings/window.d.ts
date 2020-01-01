export {}

declare global {
  interface Window {
    gaId: string
    gtag: (type: string, action: string, arguments: object) => void
    [key: string]: any
  }
}
