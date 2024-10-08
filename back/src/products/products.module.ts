import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { Module } from "@nestjs/common";
import { Product } from "./products.entity";
import { Category } from "src/category/entities/category.entity";
import { Appointment } from "src/appointment/appointment.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Product, Category, Appointment])],
    controllers:[ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule{}