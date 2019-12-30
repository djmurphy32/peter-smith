export {}

declare global {
  interface Window {
    gtag: (type: string, action: string, arguments: object) => void
  }
}
