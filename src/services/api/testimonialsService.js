import testimonialsData from "@/services/mockData/testimonials.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const testimonialsService = {
  async getAll() {
    await delay(400);
    return [...testimonialsData];
  },

  async getById(id) {
    await delay(200);
    const testimonial = testimonialsData.find(item => item.Id === parseInt(id));
    if (!testimonial) {
      throw new Error("Testimonial not found");
    }
    return { ...testimonial };
  }
};