import axios from "axios";

// const baseurlauth = 'http://10.0.2.132:8000' 
// const subscriptionauth = 'http://10.0.2.132:8002' 
// const aibase = 'http://10.0.2.132:8001' 

const baseurlauth = 'https://csa-auth.codibot.ai' 
const subscriptionauth = 'https://csa-sub.codibot.ai' 
const aibase = 'https://csa-ai.codibot.ai' 


export const signup = (data) =>
    axios.post(`${baseurlauth}/api/v1/web/auth/signup`, data , 
    {headers: {  
        'Accept': 'application/json',
    }}
)

export const createsubscription = async (planId, tenure , startDate , token ) => {
    try {
        const res = await axios.post(
            `${subscriptionauth}/api/v1/subscriptions`,
            {planId, tenure, startDate},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        return res.data
    } catch (error) {
        return error;
    }
}

export const createChatbot = (token) =>
    axios.post(`${aibase}/api/v1/chatbot` , 
        {}, 
    {headers: {  
        'Authorization': `Bearer ${token}`  ,
    }}
)

export const createinvoice = async (amount, invoice , paidDate, token ) => {
    try {
        const res = await axios.post(
            `${subscriptionauth}/api/v1/invoice`,
            {amount, invoice, paidDate},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        return res.data
    } catch (error) {
        return error;
    }
}
