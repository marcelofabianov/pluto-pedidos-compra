import { EmailInterface } from '@core/value-objects/email-interface'
import { IdInterface } from '@core/value-objects/id-interface'

export interface CreateUserDtoInterface {
  readonly id: IdInterface
  readonly name: string
  readonly email: EmailInterface
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly deletedAt: Date | null
  readonly archivedAt: Date | null
}
