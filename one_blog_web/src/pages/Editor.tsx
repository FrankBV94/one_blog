import type * as z from 'zod'
import { type Models } from 'appwrite'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostValidation } from '../utils/validations'
import toast from 'react-hot-toast'
import { useUserContext } from '../context/AuthContext'
import { useCreatePost } from '../queries/queries'
import { type Post } from '../utils/types'
import AnimationWrapper from '../common/AnimationWrapper'
import { convertFileToUrl } from '../utils/utils'
import { useRef, useState } from 'react'

const Editor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Post>({ resolver: zodResolver(PostValidation) })
  const navigate = useNavigate()
  const { user } = useUserContext()
  // States
  const [postTitle, setPostTitle] = useState('')
  const [preview, setPreview] = useState<string>()

  // Query
  const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost()

  // Check if the Enter key is pressed
  const handleTitleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Enter') {
      event.preventDefault()
    }
  }
  // Change the height of the input as it is typed
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostTitle(event.target.value)
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  // Gets the url of the loaded banner
  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const file = event.target.files[0]
    const urlImage = convertFileToUrl(file)
    setPreview(urlImage)
  }

  // Handler Submit
  const onSubmit: SubmitHandler<Post> = async (post: z.infer<typeof PostValidation>) => {
    navigate('/')
  }

  return (
    <AnimationWrapper keyValue='editor'>
      <section className="w-full max-w-[800px] mx-auto mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}>
          {/* Banner Input */}
          <div className='hover:opacity-80 bg-white rounded-lg'>
            <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-300 rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600'>
              {preview
                ? (<img src={preview} alt="image" className="overflow-hidden object-cover rounded-lg" />)
                : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">
                      Blog Banner
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      PNG, JPEG o JPG (MAX. 800x400px)
                    </p>
                  </div>/*  */)
              }
              <input
                {...register('banner')}
                id="dropzone-file"
                type="file"
                className="hidden"
                accept='.png, .jpeg",".jpg'
                onChange={handleUploadedFile}
              />
            </label>
          </div>
          {/* Title Input */}
          <div className=''>
            <textarea
              {...register('title')}
              placeholder='Titulo'
              className='text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-50 text-neutral-900 dark:bg-neutral-900 dark:placeholder-neutral-400 dark:text-white'
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}>
            </textarea>
            <p
              className={`font-medium text-sm ${postTitle.length > 100 ? 'text-red-600' : 'text-sky-600'
                }`}
            >
              {postTitle.length}/100
            </p>
          </div>
          <hr className="h-px bg-neutral-200 border-0 dark:bg-neutral-700"></hr>
          <div id='textEditor' className='mt-10 font-gelasio'>
            aloha
          </div>
        </form>
      </section>
    </AnimationWrapper>
  )
}

export default Editor
