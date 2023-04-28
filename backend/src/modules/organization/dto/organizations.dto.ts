import { Expose } from 'class-transformer';

export class OrganizationsDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  address: string;
  @Expose()
  email: string;
  @Expose()
  contact: string;
  // city:string;
  // country: string;
}
