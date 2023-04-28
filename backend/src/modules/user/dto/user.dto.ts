import { Expose } from "class-transformer";
import { Organization } from "src/modules/organization/entities/organization.entity";
import { Role } from "src/modules/roles/entities/role.entity";

export class UserDto {

    @Expose()
    id: string;

    @Expose()
    username: string;

    @Expose()
    organization: Organization;

    @Expose()
    email: string;

    @Expose()
    contact: string;

}
