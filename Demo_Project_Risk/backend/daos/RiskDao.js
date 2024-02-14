const Risk = require('../models/RiskModel')

class RiskDao {

    async getAllRisks() {
        return await Risk.findAll();
    }

    async createRisk(riskData) {
        return await Risk.create(riskData);
    }

    async updateRisk(id, riskData){
        const risk = await Risk.findByPk(id);
        if(!risk) return null;
        return await risk.update(riskData);
    }

    async deleteRisk(id){
        const risk = await Risk.findByPk(id);
        if(!risk) return null;
        await risk.destroy();
        return risk;
    }
}

module.exports = new RiskDao();