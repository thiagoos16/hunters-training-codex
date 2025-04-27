import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        const parsed = envSchema.safeParse(config);
        if (!parsed.success) {
          console.error(parsed.error.format());
          throw new Error('Invalid environment variables');
        }
        return parsed.data;
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
