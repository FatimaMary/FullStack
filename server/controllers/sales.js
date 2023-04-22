import OverallStat from "../models/OverallStat.js";

export const getSales = async(req, res) => {
    try {
        const overallStat = await OverallStat.find();
            console.log(JSON.stringify(overallStat));
        res.status(200).json(overallStat[0]);
    }
    catch (error) {
        res.status(404).json({ message: error.message})
    }
}