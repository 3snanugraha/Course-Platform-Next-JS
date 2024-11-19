
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.DB_HOST);

export const createRecord = async (collection: string, data: any) => {
    try {
        const record = await pb.collection(collection).create(data);
        return record;
    } catch (error) {
        throw error;
    }
};

export const getRecord = async (collection: string, id: string) => {
    try {
        const record = await pb.collection(collection).getOne(id);
        return record;
    } catch (error) {
        throw error;
    }
};

export const getAllRecords = async (collection: string) => {
    try {
        const records = await pb.collection(collection).getFullList();
        return records;
    } catch (error) {
        throw error;
    }
};

export const updateRecord = async (collection: string, id: string, data: any) => {
    try {
        const record = await pb.collection(collection).update(id, data);
        return record;
    } catch (error) {
        throw error;
    }
};

export const deleteRecord = async (collection: string, id: string) => {
    try {
        await pb.collection(collection).delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};

export const authenticate = async (email: string, password: string) => {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        return authData;
    } catch (error) {
        throw error;
    }
};
