import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SearchGymsUseCaseRequest {
  querry: string
  page: number
}

interface SearchGymsUseCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) { }

  async execute({
    querry,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(querry, page)

    return {
      gyms,
    }
  }
}
