import { Item } from "src/item/entities/item.entity";
import { Organization } from "src/organization/entities/organization.entity";
import { Vendor } from "src/vendor/entities/vendor.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Organization, (org) => org.category)
    @JoinColumn()
    organization: Organization;

    @ManyToOne(() => Category, (category) => category.child)
    @JoinColumn()
    parent: Category;

    @OneToMany(()=> Category, (category) => category.parent)
    child: Category;

    @ManyToMany(()=> Vendor, (vendor) => vendor.category)
    vendor: Vendor;

    @OneToMany(() => Item, (item) => item.category)
    item: Item;
}   
