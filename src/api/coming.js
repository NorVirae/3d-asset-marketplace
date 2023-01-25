import axios from "axios"

const newData = {
    timestamp:"Tue Jan 24 2023 16:56:42 GMT+0100 (West Africa Standard Time)",
    nickname:"Aaron",
    country:"Nigeria",
    email:"norbertmbafrank@gmail.com",
    wouldSell:"yes",
    workTeam:"No, I work Alone",
    tags:"2D, 3D",
    hearAbout:"Facebook",
    portfolio:"https://www.portfolio.com"
}

export const requestAccess = async (data) => {
    try{

        const response = await axios.post(`https://sheet.best/api/sheets/0cb12ec3-67a8-48a4-b267-82255fc13a9b`, data, {headers: {'Content-Type': 'application/json'}})
        console.log(response)
        return response

    }catch(err){
        console.log(err)

        throw new Error(err.message)
    }
}
