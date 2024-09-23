import React, { useState } from 'react';
import Modal from '../Modal'
import API_URL from '../../config';
import EDITOR_MODE from '../../enums/editor_mode';
import categories from './Categories';

const initialPostDetails = {
    title: '',
    description: '',
    category: ''
};

function PostEditorModal({ isPostEditorOpen, closePostEditor, postEditorMode }) {
    const [postDetails, setPostDetails] = useState(initialPostDetails)
    const [postError, setPostError] = useState(null);

    const handlePostEdit = (event) => {
        event.preventDefault();

    }

    const handlePostCreate = async (event) => {
        event.preventDefault();
        try {
            const createRes = await fetch(`${API_URL}forums`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postDetails),
                credentials: 'include'
            });
            const createResData = await createRes.json();
            if (createRes.ok) {
                window.location.reload(true);
            } else {
                setPostError(createResData.message)
            }
        } catch (err) {
            console.error(err.message);
            setPostError(err.message)
        }
    }

    return (
        <Modal isOpen={isPostEditorOpen} closeModal={() => { closePostEditor(); setPostDetails(initialPostDetails); setPostError(null); }}>
            <h2 className="text-2xl font-bold my-5 text-myblack border-b">{(postEditorMode === EDITOR_MODE.create) ? 'New Post' : 'Edit Post'}</h2>
            <form onSubmit={(postEditorMode === EDITOR_MODE.create) ? handlePostCreate : handlePostEdit} className="w-full">
                <div className="mb-6">
                    <div className='flex text-gray-800 gap-x-[7px] sm:gap-x-2 pb-2'>
                        {categories.map((category) => (
                            <button type="button" key={category.key} onClick={() => (postDetails.category === category.key) ? setPostDetails({ ...postDetails, category: null }) : setPostDetails({ ...postDetails, category: category.key })} className='bg-slate-300 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-2'>
                                <h1 className={`font-medium ${postDetails.category === category.key ? 'underline' : ''}`}>{category.label}</h1>
                            </button>
                        ))}
                    </div>
                    <input className="mb-2 shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="title" type="text" placeholder="Enter Title" onChange={e => { setPostError(null); setPostDetails({ ...postDetails, title: e.target.value }); }}>
                    </input>
                    <textarea rows="4" cols="50" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="description" type="text" placeholder="Whats on your mind?" onChange={e => { setPostError(null); setPostDetails({ ...postDetails, description: e.target.value }) }}>
                    </textarea>
                    <div>
                        <p className={postError ? 'text-red-500 font-medium bg-red-100 p-2 block' : 'hidden'}>{postError}</p>
                    </div>
                    <div className='w-[80%] mx-auto mt-6 mb-4'>
                        <button className='text-myblack bg-mygreen w-full rounded-md font-medium py-3 px-6' type='submit'>{(postEditorMode === EDITOR_MODE.create) ? 'Submit' : 'Update'}</button>
                    </div>
                </div>
            </form>
        </Modal >
    )
}

export default PostEditorModal