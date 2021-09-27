import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsModule } from './units/units.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, UnitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
