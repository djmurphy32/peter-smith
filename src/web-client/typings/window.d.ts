export {}

declare global {
  interface Window {
    gaId: string
    gtag: (...args: any[]) => void
    [key: string]: any
  }
}
