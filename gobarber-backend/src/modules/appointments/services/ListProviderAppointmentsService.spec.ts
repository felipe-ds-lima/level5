import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import ListProviderAppointmentsService from './ListProviderAppointmentsService'

let fakeAppointmentsRepository: FakeAppointmentsRepository
let ListProviderAppointments: ListProviderAppointmentsService
let fakeCacheprovider: FakeCacheProvider

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()
    fakeCacheprovider = new FakeCacheProvider()
    ListProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheprovider
    )
  })

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2020, 4, 20, 14, 0, 0),
    })

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2020, 4, 20, 15, 0, 0),
    })

    const appointments = await ListProviderAppointments.execute({
      provider_id: 'provider-id',
      day: 20,
      month: 5,
      year: 2020,
    })

    expect(appointments).toEqual([appointment1, appointment2])
  })
})

jest.setTimeout(30000)
