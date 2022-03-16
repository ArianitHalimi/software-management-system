import Security from '../_helpers/security'
import User from '../schemas/user.schema'
import { securityConfiguration } from '../config/security.configuration';
import { NotFound } from '../exceptions/http.exception';

class IndexService {
    private usersModel = User;

    public async login(email: string, password: string){
        let hashedPassword = Security.generateHash(password);

        let user = await this.usersModel.findOne({ where: { email: email, password: hashedPassword }});

        if(user == null){
            throw new NotFound("User not found");
        }

        let token = Security.generateToken({ id: user.id }, securityConfiguration.TOKEN_KEY);

        return {
            user,
            token
        };
    }

    public async register(firstName: string, lastName: string, email: string, password: string){
        let hashedPassword = Security.generateHash(password);
        
        let newUser = await this.usersModel.create({
            id: Security.generateUniqueId(), 
            firstName, 
            lastName, 
            email, 
            password: hashedPassword
        });

        return newUser;
    }
}

export default IndexService