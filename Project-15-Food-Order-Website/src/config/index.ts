import { Client, Databases } from "appwrite";

export const appwriteConfig = {
  projectID: import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID,
  databaseID: import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE_ID,
  pizzaCollectionID: import.meta.env.VITE_PUBLIC_APPWRITE_PIZZAS_COLLECTION_ID,
  ordersCollectionID: import.meta.env.VITE_PUBLIC_APPWRITE_ORDERS_COLLECTION_ID,
};

export const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(appwriteConfig.projectID);
export const databases = new Databases(client)