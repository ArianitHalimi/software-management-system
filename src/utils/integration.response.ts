export class IntegrationResponse {
    public static parseUserModel(model: any){
        let { createdAt, updatedAt, password, ...rest } = model.dataValues;
        return { ...rest }
    }
}