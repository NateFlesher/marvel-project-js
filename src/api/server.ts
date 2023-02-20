let token = `c380b01a40f43caebf277cdb042f8f2c9dadb2edfcb708f0`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://colorful-stingy-snowshoe.glitch.me/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://colorful-stingy-snowshoe.glitch.me/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://colorful-stingy-snowshoe.glitch.me/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}