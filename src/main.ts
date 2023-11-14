import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as pgAdminSessionStore from 'connect-pg-simple';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    store: new (require('connect-pg-simple')(session))({
      conString: 'postgres://postgres:password@localhost:5432/postgres'
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'testing',
    cookie: {
      maxAge: 60000
    }
  }));
  await app.listen(3000);
}
bootstrap();
