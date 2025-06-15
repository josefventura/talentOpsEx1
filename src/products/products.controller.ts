import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductRequest, Product, UpdateProductRequest } from './types';
import { Response } from "express";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  find(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }
  @Post()
    async create(@Body() createProduct: CreateProductRequest, @Res() response: Response):Promise<any> {
        const newProduct = await this.productsService.createProduct(createProduct);
        if (!newProduct.success) {
            return response.status(400).json({
                status: "error",
                message: "Error al crear el producto",
                errors: newProduct.errors
            });
        }
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: newProduct.data
        }); 
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateHero: UpdateProductRequest, @Res() response: Response):Promise<any> {
        const updatedProduct = await this.productsService.updateProduct(id, {...updateHero});
        if (!updatedProduct.success) {
            return response.status(400).json({
                status: "error",
                message: "Error al actualizar el producto",
                errors: updatedProduct.errors
            });
        }
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: updatedProduct.data
        }); 
    }
}
