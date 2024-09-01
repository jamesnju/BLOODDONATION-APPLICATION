"use server";


export interface DonarsDetails {
    id: number;
    fullName: string;
    age: number;
    bloodGroup: string;
    phoneNumber: string;
    address: string;
    email: string;
}

//creating a donar
export async function createDonar(data: DonarsDetails) {
    const res = await fetch(`http://localhost:5127/api/Donar/CreateDonar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (res.status === 200) {
        const responseData = await res.json(); // Parse the response as JSON
        return responseData; // Return the parsed response
    }

    //console.log(res, "response");

    return {
        status: false,
        message: "Something went wrong"
    };
}

export async function updateDonar(data: DonarsDetails) {
    try {
        const res = await fetch(`http://localhost:5127/api/Donar/UpdateDonorDetails/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const result = await res.json();
            return result;
        } else {
            console.log(`Error: ${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        console.error(`Update error: ${error}`);
    }

    return {
        res: false,
        message: "Something went wrong"
    };
}

//Delete DOnar

export async function deleteDonar(id: number) {
    try {
        const res = await fetch(`http://localhost:5127/api/Donar/DeleteDonorById/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            const text = await res.text(); // Read response as text
            let result;

            try {
                result = JSON.parse(text); // Try parsing as JSON
            } catch (jsonError) {
                console.error("JSON parsing error:", jsonError);
                result = { message: text }; // Use raw text if JSON parsing fails
            }

            return result;
        } else {
            console.log(`Error: ${res.status} - ${res.statusText}`);
            return {
                res: false,
                message: `Error: ${res.status} - ${res.statusText}`
            };
        }
    } catch (error) {
        console.error(`Delete error: ${error}`);
        return {
            res: false,
            message: "Something went wrong"
        };
    }
}


export async function profileById(id: number) {
    try {
        const res = await fetch(`http://localhost:5127/api/Donar/GetDonarById/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: { tags: ["getdonars"] },
            cache: "no-store",
        });
        
        if (!res.ok) throw new Error("Network issues");
        
        const data = await res.json();
        
        return data || [];
    } catch (error) {
        console.error("Error fetching profile:", error);
        return []; // Return an empty array or handle the error as needed
    }
}