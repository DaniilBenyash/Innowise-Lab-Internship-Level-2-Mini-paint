export interface IAuthRepository<TUser> {
    signIn(email: string, password: string): Promise<TUser>
    signUp(email: string, password: string): Promise<TUser>
  }