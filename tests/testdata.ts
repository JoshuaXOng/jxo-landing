'use strict';

import { Collection } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../src/database/models';



const normalUuid = uuidv4();
const nonExistantUuid = uuidv4();

const usersTestData = {

    users: {
        normal: new User(normalUuid, `test-user-${normalUuid}`, `test-user-${normalUuid}@gmail.com`, 'test-password', 'test-salt'),
        nonExistant: new User(nonExistantUuid, `test-user-DNID-${nonExistantUuid}`, `test-user-DNID-${nonExistantUuid}@gmail.com`, 'test-password', 'test-salt')
    },

    nonExistantUsername: 'test-username-that-does-not-exist',
    nonExistantEmail: 'test-email-that-does-not-exist',
    
    generateOne() { 
        const uuid = uuidv4();
        return new User(uuid, `test-user-${uuid}`, `test-user-${uuid}@gmail.com`, 'test-password', 'test-salt');
    },

    async populateUsersCollection(collection: Collection) {
        [...Array(4).keys()].forEach(async _ => {
            await collection.insertOne(usersTestData.generateOne());
        });
        await collection.insertOne(usersTestData.users.normal);
    }

}



export { usersTestData };