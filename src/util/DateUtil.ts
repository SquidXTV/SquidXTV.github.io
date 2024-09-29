export function calculateAge(): number {
    const now = new Date();
    let age: number = now.getFullYear() - 2005;

    const month: number = now.getMonth() + 1; // 0-indexed
    if (month < 7 || (month == 7 && now.getDate() < 17)) {
        age--;
    }

    return age;
}
