export type Postimage = {
  date?: string
  explanation?: string
  hdurl?: string
  media_type?: string
  service_version?: string
  title?: string
  url?: string
}

export type RootStackParams = {
  Home: undefined
  Detail: Postimage
}
