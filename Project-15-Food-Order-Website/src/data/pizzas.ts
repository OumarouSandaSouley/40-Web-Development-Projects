import { appwriteConfig, databases } from "../config";
import { Pizza } from "../types/pizza";

export const fetchPizzas = async (): Promise<Pizza[]> => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseID,
      appwriteConfig.pizzaCollectionID
    );
    return response.documents as Pizza[];
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return [];
  }
};
