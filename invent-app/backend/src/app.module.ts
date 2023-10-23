import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticsCompaniesModule } from './logistics-companies/logistics-companies.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { PackageTypeModule } from './package-type/package-type.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true, //not use in production
    }),
    UsersModule, 
    LogisticsCompaniesModule,
    ItemsModule,
    AuthModule,
    PackageTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
