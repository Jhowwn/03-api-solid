import { GetUserMetricsUseCase } from '../get-user-metrics'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeUserMetricsUseCase() {
  const checkInRepositories = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsUseCase(checkInRepositories)

  return useCase
}
