import { ID, Query } from 'appwrite'
import { appwriteConfig, account, databases, storage, avatars } from './config'
import { type Post, type NewUser } from '../utils/types'

/** SIGN UP */
export async function createUserAccount(user: NewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    )

    if (newAccount.$id === null) throw new Error()

    const avatarUrl = avatars.getInitials(user.name)

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      avatarUrl
    })

    return newUser
  } catch (error) {
    console.log(error)
    return error
  }
}

/** SAVE USER TO DB */
export async function saveUserToDB(user: {
  accountId: string
  name: string
  email: string
  username: string
  avatarUrl: URL
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    )

    return newUser
  } catch (error) {
    console.log(error)
  }
}

/** SIGN IN */
export async function signInAccount(user: { email: string, password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password)

    return session
  } catch (error) {
    console.log(error)
  }
}

/** GET ACCOUNT */
export async function getAccount() {
  try {
    const currentAccount = await account.get()

    return currentAccount
  } catch (error) {
    console.log(error)
  }
}

/** GET USER */
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount()

    if (currentAccount?.$id === null) throw new Error()

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if (currentUser.documents.length === 0) throw new Error()

    return currentUser.documents[0]
  } catch (error) {
    console.log(error)
    return null
  }
}

/** SIGN OUT */
export async function signOutAccount() {
  try {
    const session = await account.deleteSession('current')

    return session
  } catch (error) {
    console.log(error)
  }
}

/** CREATE POST */
export async function createPost(post: Post) {
  try {
    // Upload file to appwrite storage
    const uploadedFile = await uploadFile(post.file[0])

    if (uploadedFile == null) throw new Error()

    // Get file url
    const fileUrl = getFilePreview(uploadedFile.$id)
    if (fileUrl == null) {
      await deleteFile(uploadedFile.$id)
      throw new Error()
    }

    // Convert tags into array
    const tags = ((post.tags?.replace(/ /g, '').split(',')) != null) || []

    // Create post
    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        location: post.location,
        tags
      }
    )

    if (newPost.$id === null) {
      await deleteFile(uploadedFile.$id)
      throw new Error()
    }

    return newPost
  } catch (error) {
    console.log(error)
  }
}

/** UPLOAD FILE */
export async function uploadFile(file: File) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    )

    return uploadedFile
  } catch (error) {
    console.log(error)
  }
}

/** GET FILE URL */
export function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      'top',
      100
    )

    if (fileUrl.href === null) throw new Error()

    return fileUrl
  } catch (error) {
    console.log(error)
  }
}

/** DELETE FILE */
export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId)

    return { status: 'ok' }
  } catch (error) {
    console.log(error)
  }
}
