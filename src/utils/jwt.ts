import jwt from 'jsonwebtoken';

export const generateJWT = (usuario:object)=>{
    const token = jwt.sign(usuario,process.env.JWT_SECRET!,{expiresIn:'1h'})

    return token;
}