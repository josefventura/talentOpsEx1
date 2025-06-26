
// Service usando decorators
class UserService {
  @Log({ level: 'info' })
  @Cache({ 
    ttl: 300, 
    keyGenerator: (email: string) => `user:email:${email}` 
  })
  @Retry({ attempts: 3, delay: 1000, backoff: 2 })
  async findByEmail(email: string): Promise<User | null> {
    // Simular operación que puede fallar
    if (Math.random() < 0.3) {
      throw new Error('Database connection failed');
    }
    
    // Simular delay de database
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
      id: '1',
      email,
      name: 'John Doe',
      createdAt: new Date()
    };
  }
  
  @Log({ level: 'info' })
  @Validate(CreateUserSchema)
  @Cache({ ttl: 600, keyGenerator: () => 'users:count' })
  async createUser(userData: { email: string; name: string }): Promise<User> {
    // Business logic puro
    const user: User = {
      id: `user_${Date.now()}`,
      email: userData.email,
      name: userData.name,
      createdAt: new Date()
    };
    
    console.log('Creating user:', user);
    return user;
  }
}
