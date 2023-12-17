import { ID, Query } from 'appwrite'
import { appwriteConfig, account, databases, storage, avatars } from './config'
import { IUpdatePost, INewPost, type INewUser, IUpdateUser } from '../utils/types'

// ============================================================
// AUTH
// ============================================================

// ============================== SIGN UP
export async function createUserAccount(user: INewUser) {
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
      image_url: avatarUrl
    })

    return newUser
  } catch (error) {
    console.log(error)
    return error
  }
}

// ============================== SAVE USER TO DB
export async function saveUserToDB(user: {
  accountId: string
  email: string
  name: string
  image_url: URL
  username: string
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

// ============================== SIGN IN
export async function signInAccount(user: { email: string, password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password)

    return session
  } catch (error) {
    console.log(error)
  }
}

// ============================== GET ACCOUNT
export async function getAccount() {
  try {
    const currentAccount = await account.get()

    return currentAccount
  } catch (error) {
    console.log(error)
  }
}

// ============================== GET USER
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
