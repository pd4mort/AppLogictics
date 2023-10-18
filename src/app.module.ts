import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticsCompaniesModule } from './logistics-companies/logistics-companies.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { PackageTypeModule } from './package-type/package-type.module';



@Module({
  imports: [
    UsersModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user',
      password: 'root',
      database: 'db_invent',
      autoLoadEntities: true,
      synchronize: true, //not use in production
    }),
    LogisticsCompaniesModule,
    ItemsModule,
    AuthModule,
    PackageTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
