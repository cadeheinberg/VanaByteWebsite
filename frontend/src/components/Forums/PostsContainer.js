import React, { useEffect, useState } from "react";
import Thumbnail from './Thumbnail';
import API_URL from '../../config';

function PostsContainer() {
    const [forumPosts, setForumPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch(`${API_URL}v1/forum/getAll`, {
                method: 'GET',
                credentials: 'include'
            });
            const arrayOfJsons = await response.json();
            if (response.ok) {
                setForumPosts(arrayOfJsons);
            } else {
                console.error(arrayOfJsons.message);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='bg-mywhite w-full pb-8'>
            <div className='max-w-[600px] mx-auto p-2 sm:px-4'>
                <div className='grid grid-cols-1 gap-x-10 gap-y-3'>
                    {forumPosts.map((forumPost, index) => (
                        <Thumbnail
                            key={index}
                            forumPost={forumPost}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostsContainer;
