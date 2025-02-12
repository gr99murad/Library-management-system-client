import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const auth = getAuth();

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdateProfile = async(e) =>{
        e.preventDefault();

        try{
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });

            Swal.fire("Success", "Profile updated Successfully!", "success");
        }
        catch(error){
            Swal.fire("Error",error.message,"error");
        }
    }
    return (
        <div className='mx-24 py-32 mx-auto'>
            <h2 className='text-text text-3xl font-bold py-10'>Edit Profile</h2>
            <form onSubmit={handleUpdateProfile} className='space-y-4'>
                <div className=''>
                    <img src={photoURL} alt="" className='w-24 h-24 rounded-full border border-gray-300' />

                </div>
                <div>
                    <label className='label'>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-1/2 input input-bordered' />
                </div>
                <div>
                    <label className='label'>Photo URL</label>
                    <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className='w-1/2 input input-bordered' />
                </div>
                <button type='submit' className='w-1/2 rounded-lg bg-accent py-2'>Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;