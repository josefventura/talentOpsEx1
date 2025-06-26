import { Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./types/user";

@Controller('users')
export class ProductsController {
  constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        try {
            // Test validation
            await this.userService.createUser({ email: 'john@example.com', name: 'John Doe' });
            
            // Test caching y retry
            const user = await this.userService.findByEmail('john@example.com');
            console.log('Found user:', user);
            
            // Second call should hit cache
            const cachedUser = await this.userService.findByEmail('john@example.com');
            console.log('Cached user:', cachedUser);
            
        } catch (error) {
            console.error('Error:', error);
        
        }
    }
}