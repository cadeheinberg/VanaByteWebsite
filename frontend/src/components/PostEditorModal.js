import React, { useState } from 'react';
import Modal from './Modal'
import EDITOR_MODE from '../enums/editor_mode';

function PostEditorModal({ isPostEditorOpen, closePostEditor, postEditorMode }) {
    const [postDetails, setPostDetails] = useState({
        owner_uuid: '',
        title: '',
        body: '',
        date: ''
    })

    const handlePostEdit = () => {

    }

    return (
        <Modal isOpen={isPostEditorOpen} closeModal={closePostEditor}>
            <h2 className="text-2xl font-bold my-5 text-myblack border-b">{(postEditorMode === EDITOR_MODE.new) ? 'New Post' : 'Edit Post'}</h2>
            <form onSubmit={handlePostEdit} className="w-full">
                <div className="mb-6">
                    <input className="mb-2 shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="email" type="text" placeholder="Enter Title" onChange={e => setPostDetails({ ...postDetails, title: e.target.value })}>
                    </input>
                    <textarea rows="4" cols="50" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none"
                        name="email" type="text" placeholder="Whats on your mind?" onChange={e => setPostDetails({ ...postDetails, body: e.target.value })}>
                    </textarea>
                </div>
            </form>
        </Modal>
    )
}

export default PostEditorModal