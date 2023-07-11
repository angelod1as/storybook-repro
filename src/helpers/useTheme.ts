/**
 * Sets correct theme
 */
export function useTheme(): void {
  if (typeof window !== "undefined") {
    const href = window.location.href
    const theme = href.includes("theme=2") ? "2" : "1"

    document.getElementsByTagName("html")[0].classList.add(`theme-${theme}`)
  }
}
