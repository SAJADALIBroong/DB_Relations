import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatedSelfRef1691053063884 implements MigrationInterface {
  name = 'CreatedSelfRef1691053063884';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "userid" integer NOT NULL DEFAULT 0`,
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_758b8ce7c18b9d347461b30228d" UNIQUE ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_758b8ce7c18b9d347461b30228d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_758b8ce7c18b9d347461b30228d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_758b8ce7c18b9d347461b30228d"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userid"`);
  }
}
