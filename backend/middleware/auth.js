import jwt from 'jsonwebtoken'

const auth = async (res, req, next) => {
    try {
        const token = req.headers.authorrization.split(" ")[1];
        let decodedData;
        if(token) {
            decodedData = jwt.verify(token, process.env.SECRET_KEY)
            req.userId = decodedData?.id
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth