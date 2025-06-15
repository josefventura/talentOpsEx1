import { Product } from "./common.type";

type EventType = 'product';
type EventAction = 'created' | 'updated' | 'deleted';

type EventName = `${EventType}_${EventAction}`;

interface EventPayload {
  product_created: { id: string; name: string };
  product_updated: { id: string; changes: Partial<Product> };
  product_deleted: { id: string };
}

class TypeSafeEventEmitter {
  private listeners: {
    [K in EventName]?: Array<(payload: EventPayload[K]) => void>
  } = {};
  
  on<T extends EventName>(
    eventName: T, 
    listener: (payload: EventPayload[T]) => void
  ): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName]!.push(listener);
  }
  
  emit<T extends EventName>(
    eventName: T, 
    payload: EventPayload[T]
  ): void {
    const eventListeners = this.listeners[eventName];
    if (eventListeners) {
      eventListeners.forEach(listener => listener(payload));
    }
  }
}


const emitter = new TypeSafeEventEmitter();

emitter.on('user_created', (payload) => {
  // payload es automáticamente { userId: string; email: string }
  console.log(`New user created: ${payload.email}`);
});

emitter.emit('user_created', { 
  userId: 'user_123', 
  email: 'john@example.com' 
}); // ✅ Type-safe

// emitter.emit('user_created', { userId: 'user_123' }); // ❌ TypeScript error - missing email
// emitter.emit('invalid_event', { data: 'test' }); // ❌ TypeScript error - invalid event name