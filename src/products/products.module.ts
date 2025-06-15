import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { ProductsRepository } from "./products.repository";

@Module({
  controllers: [ProductsController],
  providers: [ProductService, ProductsRepository],

})
export class ProductsModule {}