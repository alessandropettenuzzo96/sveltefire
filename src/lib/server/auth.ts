import * as admin from 'firebase-admin';

export type FirebaseAuthUser = {
    uid: string;
    email?: string;
    email_verified?: boolean;
    phone_number?: string;
    picture?: string;
}

export async function validate(admin: admin.app.App, token: string): Promise<FirebaseAuthUser | null> {
    try {
        const claim = await admin.auth().verifyIdToken(token);
        return {
            uid: claim.uid,
            email: claim.email,
            email_verified: claim.email_verified,
            phone_number: claim.phone_number,
            picture: claim.picture
        };
    } catch (e) {
        return null;
    }
}