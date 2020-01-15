export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    [key: string]: any
  }
}
