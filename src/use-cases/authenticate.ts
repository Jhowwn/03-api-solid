import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/Invalid-credentials-error'

interface AuthenticateUserCaseRequest {
  email: string
  password: string
}

interface AuthenticateUserCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    email,
    password,
  }: AuthenticateUserCaseRequest): Promise<AuthenticateUserCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
