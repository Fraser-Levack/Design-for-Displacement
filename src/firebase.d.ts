declare module '../firebase' {
    export function writeUserData(userId: string, name: string, email: string): void;
    export function readUserData(userId: string, callback: (data: { username: string; email: string }) => void): void;
}