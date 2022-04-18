'use strict';

import MongoController from "../../../src/database/mongo/controllers/main";
import { MongoControllersManager } from "../../../src/database/mongo/utils";



describe('Test Suite for MongoControllersManager.', () => {

    let mongoController: MongoController;
    beforeAll(async () => {
        expect(MongoControllersManager._staging).toBeUndefined();
        mongoController = await MongoControllersManager.getStaging();
    });

    afterAll(async () => {
        await (await MongoControllersManager.getStaging())._client.close();
    });

    test('Test MongoControllersManager returns the same instance of MongoController (Singleton).', async () => {
        for(let i = 0; i < 2; i++) {
            const sameMongoController = await MongoControllersManager.getStaging();
            expect(sameMongoController instanceof MongoController).toBeTruthy();
            expect(sameMongoController).toEqual(mongoController);
        }
    });

    test('Test MongoControllersManager returns a properly configured MongoController (Singleton).', async () => {
        const mongoController = await MongoControllersManager.getStaging();
        expect(mongoController.notes).not.toBeUndefined();
        expect(mongoController.notes._notesCollection).not.toBeUndefined();
        expect(mongoController.users).not.toBeUndefined();
        expect(mongoController.users._usersCollection).not.toBeUndefined();
    });

});


