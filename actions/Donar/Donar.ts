"use server";


export interface DonarsDetails {
    id: number;
    fullName: string;
    age: string;
    bloodGroup: string;
    phoneNumber: string;
    address: string;
    email: string;

}
export interface CreateDonarResponse {
    message: string;
    error?: string;
}
export async function createDonar(data: DonarsDetails) {
    const res = await fetch(`http://localhost:5127/api/Donar/CreateDonar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify()
    })
    if (!res.ok) throw new Error("Network issues try again");

}