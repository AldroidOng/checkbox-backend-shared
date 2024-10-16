import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_NAME: Joi.string().required(),
        DUE_SOON_DAYS_AWAY: Joi.string().required(),
        TASK_MANAGEMENT_MICROSERVICE_HOST: Joi.string().default('localhost'),
        TASK_MANAGEMENT_MICROSERVICE_PORT: Joi.number().default(3001),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [NestConfigModule, ConfigService],
})
export class ConfigModule {}
