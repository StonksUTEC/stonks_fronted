import axios from 'axios';
import { getToken } from './tokenAPI';

export async function isAuthenticated() {
    const token = await getToken();
    if (!token) return false;
    return true;
}

export function getUsername() {
    try {
        return 'Alexander';

    } catch (error) {
        console.error('Error in connection with axios');
        return 'Undefined';
    }

}