export interface User {
  name: string
  secondName: string
  id: number
  activity: boolean

  deleteUser(id: number): boolean
  actavateUser(id: number): void
}

export class UserAccount {
  name: string
  secondName: string
  id: number
  activity: boolean

  constructor(name: string, secondName: string, id: number) {
    this.name = name
    this.secondName = secondName
    this.id = id
    this.activity = true
  }

  public deleteUser(id: number): boolean {
    if (this.id !== id) {
      return false
    }
    this.activity = false
    return true
  }


  public actavateUser(id: number) {
    if (this.id === id) {
      this.activity = true
    }
  }

}
