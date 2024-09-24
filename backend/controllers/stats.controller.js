import { MinecraftStats } from '../models/stats.model.js';
import { WebUserData } from '../models/user.model.js';

export const getAllStats = async (req, res) => {
    try {
        //raw: true option to just get a simple return, not all the sequelize jargon
        const stats = await MinecraftStats.findAll({ raw: true });
        return res.json(stats);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching stats" });
    }
}

export const setProfile = async (req, res) => {
    try {
        const web_uuid = req.user.web_uuid
        const { mc_uuid } = req.body;
        WebUserData.update({ profile: mc_uuid }, { where: { web_uuid: web_uuid } });
        return res.status(201).json({ message: 'Profile update successful' });
    } catch (err) {
        return res.status(400).json({ message: "Error setting profile" });
    }
}
