import featuresData from "@/services/mockData/features.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const featuresService = {
  async getAll() {
    await delay(300);
    return [...featuresData];
  },

  async getById(id) {
    await delay(200);
    const feature = featuresData.find(item => item.Id === parseInt(id));
    if (!feature) {
      throw new Error("Feature not found");
    }
    return { ...feature };
  }
};