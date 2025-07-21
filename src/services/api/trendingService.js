import trendingData from "@/services/mockData/trendingTopics.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const trendingService = {
  async getAll() {
    await delay(350);
    return [...trendingData];
  },

  async getById(id) {
    await delay(200);
    const trend = trendingData.find(item => item.Id === parseInt(id));
    if (!trend) {
      throw new Error("Trend not found");
    }
    return { ...trend };
  }
};