'use strict';

import { MongoControllersManager } from "../../../../src/database/mongo/utils";
import MongoDBUsersController from '../../../../src/database/mongo/controllers/users';
import { usersTestData } from '../../../testdata';
import { User } from '../../../../src/database/models';
import { v4 as uuidv4 } from 'uuid'; 



describe('Test suite for MongoDBUsersController.', () => {

    let usersController: MongoDBUsersController; 
    beforeAll(async () => {
        usersController = (await MongoControllersManager.getStaging()).users;
        await usersTestData.populateUsersCollection((await MongoControllersManager.getStaging()).users._usersCollection);  
    });

    afterAll(async () => {
        await (await MongoControllersManager.getStaging())._client.close();
    });

    test('Get user by ID that does not exist in DB.', async () => {
        const user = await usersController.getById(usersTestData.users.nonExistant.id);
        expect(user).toBe(undefined);
    });

    test('Get user by ID that does exist in DB.', async () => {
        const user = await usersController.getById(usersTestData.users.normal.id);
        expect(user).toEqual(usersTestData.users.normal);
    });

    test('Get user by email that does not exist in DB.', async () => {
        const user = await usersController.getByEmail(usersTestData.nonExistantEmail);
        expect(user).toBe(undefined);
    });

    test('Get user by email that does exist in DB.', async () => {
        const user = await usersController.getByEmail(usersTestData.users.normal.email);
        expect(user).toEqual(usersTestData.users.normal);
    });

    test('Add user to DB.', async () => {
        const user = usersTestData.generateOne();
        const beforeFindResult = await usersController._usersCollection.findOne({ id: user.id }) as User;
        expect(beforeFindResult).toBeUndefined();
        const result = await usersController.addOne(user);
        expect(result).toBeTruthy();
        const afterFindResult = await usersController._usersCollection.findOne({ id: user.id }) as User;
        expect(afterFindResult).toEqual(user);
    });

    test('Update an existing user by ID.', async () => {

        const user = usersTestData.generateOne();
        const insertResult = await usersController._usersCollection.insertOne(user);
        expect(insertResult.acknowledged).toBeTruthy();
        
        const newUsername = `a-different-test-name-${uuidv4()}`;
        expect(user.username).not.toBe(newUsername);

        const result = await usersController.updateById(user.id, { ...user, username: newUsername });
        expect(result).toBeTruthy();

    });

    test('Delete all users from DB.', async () => {
        await usersController.deleteAll();
        const users = await usersController._usersCollection.find({}).toArray();
        expect(users).toHaveLength(0);
    });

});
