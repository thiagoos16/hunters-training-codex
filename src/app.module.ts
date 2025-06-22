import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envSchema } from './config/env.validation';
import { HunterModule } from './hunter/hunter.module';
import { MongooseModule } from '@nestjs/mongoose';

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
    }),
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: process.env.DATABASE_URL,
        }
      },
    }),
    HunterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
