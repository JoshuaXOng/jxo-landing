'use strict';

import UsersService from '../../../src/server/services/users';
import MongoDBUsersController from '../../../src/database/mongo/controllers/users';
import { MongoControllersManager } from '../../../src/database/mongo/utils'
import { DATABASES, COLLECTIONS, MONGO_CREDENTIALS } from '../../../src/database/mongo/config';
import { Collection, MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { usersTestData } from '../../testdata';



describe('Test Suite for UsersService.', () => {

    let service: UsersService;
    beforeAll(async () => {
        service = await UsersService.initStaging();
        await usersTestData.populateUsersCollection((await MongoControllersManager.getStaging()).users._usersCollection);
    });

    afterAll(async () => {
        await (await MongoControllersManager.getStaging())._client.close();
    })

    test('Run isUsernameTaken() against a non-existant username.', async () => {
        let result = await service.isUsernameTaken(usersTestData.nonExistantUsername);
        expect(result).toBeFalsy();
    });

    test('Run isUsernameTaken() against an existant username.', async () => {
        let result = await service.isUsernameTaken(usersTestData.users.normal.username);
        expect(result).toBeTruthy();
    });

    test('Run isEmailTaken() against a non-existant email.', async () => {
        let result = await service.isEmailTaken(usersTestData.nonExistantEmail);
        expect(result).toBeFalsy();
    });

    test('Run isEmailTaken() against an existant email.', async () => {
        let result = await service.isEmailTaken(usersTestData.users.normal.email);
        expect(result).toBeTruthy();
    });

})