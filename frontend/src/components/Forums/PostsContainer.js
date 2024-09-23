import React, { useEffect, useState } from "react";
import Thumbnail from './Thumbnail';
import API_URL from '../../config';

function PostsContainer() {
    const [forumPosts, setForumPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch(`${API_URL}forums`);
            const arrayOfJsons = await response.json();
            setForumPosts(arrayOfJsons);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='bg-mywhite w-full pb-8'>
            <div className='max-w-[620px] mx-auto p-2 sm:px-4'>
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
