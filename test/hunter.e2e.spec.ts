import { INestApplication } from "@nestjs/common";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Test } from "@nestjs/testing";
import { MongooseModule } from "@nestjs/mongoose";
import { AppModule } from "src/app.module";
import mongoose from "mongoose";
import request from 'supertest';

describe('HunterController (e2e)', () => {
    let app: INestApplication;
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri =  mongoServer.getUri();

        const moduleRef = await Test.createTestingModule({
            imports: [
                MongooseModule.forRoot(uri),
                AppModule,
            ],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
        await app.close();
    });

    it ('/hunters (POST)', async () => {
        const response = await request(app.getHttpServer())
            .post('/hunters')
            .send({
                name: 'Padre Gascoigne',
                weapon: 'axe',
                level: 1,
                height: 180,
                weight: 90
            })
            .expect(201);
        
        expect(response.body).toMatchObject({
            name: 'Padre Gascoigne',
            weapon: 'axe',
            level: 1,
            height: 180,
            weight: 90,
            _id: expect.any(String),
            createdAt: expect.any(String),
        });
    });
});