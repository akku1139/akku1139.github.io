export type HugoBundleFile = {
  file: string,
  route: string,
  mod: () => Promise<any>,
  branch: boolean,
  children: HugoBundleFiles
}
export type HugoBundleFiles = Array<HugoBundleFile>
