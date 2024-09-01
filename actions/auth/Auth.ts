"use server";

interface UserData {
    email: string;
    passwordHash: string;
    fullName: string;
    age: number;
    bloodGroup: string;
    phoneNumber: string;
    address: string;
}
//register

export async function registerUser(data: UserData) {
    try {
        const res = await fetch(`http://localhost:5127/api/Account/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Network response was not ok---------------------------------: ${res.status} ${res.statusText} - ${errorText}`);
        }

        const responseData = await res.json();
        console.log('Registration successful:----------------------------------------------------------------------', responseData);
        return responseData;

    } catch (error) {
        console.log("Error during registration:-------------------------------------------------------------------------", error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}


//Login logic
export async function getUserByEmail(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:5127/api/Account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                passwordHash: password
            })
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }


}
