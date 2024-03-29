import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validate-chek-in'

export function makeValidatedCheckInUseCase() {
  const checkInRepositories = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkInRepositories)

  return useCase
}
