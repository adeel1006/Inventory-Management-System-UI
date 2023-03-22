import { Organization } from "src/modules/organization/entities/organization.entity";
import { Role } from "src/modules/roles/entities/role.entity";

export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    age: number;
    role: Role;
    organization: Organization;
}
