
import { GoogleGenerativeAI as GoogleGenAI } from "@google/generative-ai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface SpatialData {
  visitors: string;
  dwellTime: string;
  occupancy: string;
  safetyIncidents: number;
}

export const getSpatialInsights = async (data: SpatialData) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the following spatial intelligence data for a facility:
      - Total Visitors: ${data.visitors}
      - Avg Dwell Time: ${data.dwellTime}
      - Peak Occupancy: ${data.occupancy}
      - Safety Incidents: ${data.safetyIncidents}

      Provide 3 concise, actionable professional insights for the facility manager. 
      Focus on efficiency, safety, and visitor experience. 
      Return the response in a brief bulleted format.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return "Unable to generate insights at this time. Please check your spatial sensors.";
  }
};

export const getSafetyRecommendation = async (zone: string, density: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `As a safety consultant, provide a one-sentence immediate recommendation for ${zone} which currently has a density of ${density} people per square meter. The critical threshold is 4.0.`,
    });
    return response.text;
  } catch (error) {
    return "Monitor zone closely for further density increases.";
  }
};
