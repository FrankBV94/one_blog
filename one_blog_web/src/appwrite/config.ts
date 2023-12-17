import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  notifictionCollectionId: import.meta.env.VITE_APPWRITE_NOTIFICATIONS_COLLECTION_ID,
  commentCollectionId: import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID,
  commentRelationshipCollectionId: import.meta.env.VITE_APPWRITE_COMMENTS_RELATIONSHIP_COLLECTION_ID
}

export const client = new Client()

client.setEndpoint(appwriteConfig.url)
client.setProject(appwriteConfig.projectId)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
