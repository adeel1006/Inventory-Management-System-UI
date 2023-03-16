import { Organization } from "src/organization/entities/organization.entity";
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    age: number;
    role: Role;
    organization: Organization;
}
