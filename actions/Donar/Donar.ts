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

export async function updateDonar(data:DonarsDetails){

    const res = await fetch(``,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    if(res.status === 200){
        const data = await res.json();
        return data
    }

    return {
        res: false,
        message: "Something Went Wrong"
    }

}