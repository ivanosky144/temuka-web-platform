import React, {useState, useContext, useEffect} from 'react'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import useAuthStore from '../store/authStore'
import { getFileStorage } from '../services/index'
import { getUserDetail, updateUser } from '../services/userService'
import { UserDetailData } from '../types'

const Settings: React.FC = () => {

    const user = useAuthStore((state) => state.user);
    const [userdata, setUserdata] = useState<UserDetailData>()
    const publicFolder = getFileStorage();
    
    const [uploadedPhoto, setUploadedPhoto] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getUserDetail(Number(user?.id))
                setUserdata(data)
            } catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [loading])

    const [username, setUsername] = useState<string>('')
    const [profilePictureFile, setProfilePictureFile] = useState<File | null>()

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userdetail: UserDetailData = {
            username: username,
        }
        if(profilePictureFile){
          try {
            const formData = new FormData()
            formData.append('file', profilePictureFile)
            // await useUpload(formData)        
            userdetail.profilePicture = profilePictureFile.name
          } catch(err) {
            //   onError(err as string)
          }
        } else {
        //   onError('No file selected')
        }
    
        try {
          const res = await updateUser(Number(user?.id), userdetail)
          setLoading(!loading)
          setUploadedPhoto("")
          if(res) {
            // onSuccess("User has been updated")
          }
          else {
            // onError("Error while updating")
          }
        } catch(err){
        //   onError(err as string)
        }
      }

    const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const file = e.currentTarget.files?.[0]
        setProfilePictureFile(file)

        if(file){
          try {
            const formData = new FormData()
            formData.append('file', file)
            // await useUpload(formData)
            setUploadedPhoto(file.name)        
          } catch(err) {
            //   onError(err as string)
          }
        } else {
        //   onError('No file selected')
        }
    }

  return (
    <>
        <Navbar />
        <div className="flex">
            <Leftbar />
            <div className="px-8 py-6 max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2 relative">
                        {/* {userdata?.profilePicture === "" ? (
                            <img
                            className="h-32 w-32 object-cover rounded-full border-4 border-white mb-3"
                            src={publicFolder + 'Founder.jpg'}
                            alt="default photo profile"
                        />
                        ) : (
                            <img
                            className="h-32 w-32 object-cover rounded-full border-4 border-white mb-3"
                            src={publicFolder + userdata?.profilePicture}
                            alt="user photo profile"
                        />
                        )} */}
                        {uploadedPhoto === "" ? (
                            userdata?.profilePicture === "" ? (
                                <img
                                className="h-32 w-32 object-cover rounded-full border-4 border-white mb-3"
                                src={publicFolder + 'DefaultPP.jpg'}
                                alt="Default photo profile"
                                />
                            ) : (
                                <img
                                className="h-32 w-32 object-cover rounded-full border-4 border-white mb-3"
                                src={publicFolder + userdata?.profilePicture}
                                alt="User photo profile"
                                />
                            )
                            ) : (
                            <img
                                className="h-32 w-32 object-cover rounded-full border-4 border-white mb-3"
                                src={publicFolder + uploadedPhoto}
                                alt="Uploaded photo"
                            />
                        )}
                        <label 
                            className='text-xs text-white p-1 rounded-md bg-blue-500 cursor-pointer absolute bottom-0 font-semibold'
                            style={{ zIndex: 1 }}>
                                Edit your photo profile
                            <input type="file" className='hidden' onChange={handlePhoto}/>
                        </label>
                    </div>
                    <div className="flex flex-col gap-3 justify-between w-[100%]">
                        <div className="mb-4 flex items-center gap-2 w-[100%] justify-between">
                            <label className="block text-slate-700 text-md font-bold mb-2" htmlFor="email">
                                Username
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:border-blue-500 shadow-md font-semibold max-w-[85%]"
                                id="text"
                                type="text"
                                placeholder={userdata?.username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 flex items-center gap-2 w-[100%] justify-between">
                            <label className="block text-slate-700 text-md font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:border-blue-500 shadow-md font-semibold max-w-[85%]"
                                id="email"
                                type="email"
                                placeholder={userdata?.email}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Settings