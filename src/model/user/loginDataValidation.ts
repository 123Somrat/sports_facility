
import z from 'zod'

const userLoginDataValidation = z.object({
      email : z.string({required_error:'Invalid Credential'}).email({message:'Invalid email format'}),
      password : z.string({required_error:'Invalid Credentials'})
})


export default userLoginDataValidation;