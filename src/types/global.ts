export {}

declare global {
  interface Ghost {
    slug: string
    name: string
    evidences: [string, string, string]
  }

  interface Evidence {
    slug: string
    name: string
  }
}
