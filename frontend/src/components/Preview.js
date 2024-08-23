import React from 'react'
import Thumbnail from './Thumbnail'

function Preview() {
    const noteids = [-1, -1, -1, -1];
    const authors = ["Mackenzie S.", "Sam H.", "Burt W.", "Carrie R."];
    const profile_pics = ["samples/s1.svg", "samples/s2.svg", "samples/s3.svg", "samples/s4.svg"];
    const dates = ["08/23/2024", "08/23/2024", "08/23/2024", "08/23/2024"];
    const titles = ["What is HTML?", "JavaScript and REACT", "Apples and Windows", "Camera Software"]
    const descriptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."
    ];
    return (
        <div className='bg-white w-full py-16 px-4'>
            <div className='flex flex-wrap justify-center max-w-[1240px] mx-auto'>
                {noteids.map((noteid, index) => (
                    <Thumbnail
                        key={index} // Use a unique key for each element
                        noteid={noteid}
                        author={authors[index]}
                        profile_pic={profile_pics[index]}
                        title={titles[index]}
                        date={dates[index]}
                        description={descriptions[index].substring(0, 300) + "..."}
                    />
                ))}
            </div>
        </div>
    )
}

export default Preview