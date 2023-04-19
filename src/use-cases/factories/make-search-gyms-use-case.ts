import { SearchGymsUseCase } from '../search-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gym-repository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsRepository)

  return useCase
}
