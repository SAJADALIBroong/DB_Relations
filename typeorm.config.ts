import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';;
import * as path from 'path';

// config();

// const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'passpass',
  database: 'DB_relations',
  migrations: ['./migrations/*.ts'],
  migrationsTableName: 'migrations',
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
});
