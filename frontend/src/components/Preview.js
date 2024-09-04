import React from 'react';
import Thumbnail from './Thumbnail';
import profile1 from "../assets/defaults/user1_solid.png";
import profile2 from "../assets/defaults/user1_solid.png";
import profile3 from "../assets/defaults/user1_solid.png";
import profile4 from "../assets/defaults/user1_solid.png";

class NoteDetails {
    constructor(noteid, author, profile_pic, title, date, description) {
        this.noteid = noteid;
        this.author = author;
        this.profile_pic = profile_pic;
        this.title = title;
        this.date = date;
        this.description = description;
    }
}

function Preview() {
    const notes = [
        new NoteDetails(-1, "Mackenzie S.", profile1, "What is HTML and why is it so easy?", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Sam H.", profile2, "JavaScript and REACT is the coolest just start using it already like come on lol", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Burt W.", profile3, "Apples and Windows", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Carrie R.", profile4, "Camera Software", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus.")
    ];

    return (
        <div className='bg-mywhite w-full pb-8'>
            <div className='max-w-[620px] mx-auto p-2 sm:px-4'>
                <div className='grid grid-cols-1 gap-x-10 gap-y-3'>
                    {notes.map((note, index) => (
                        <Thumbnail
                            key={index}
                            noteid={note.noteid}
                            author={note.author}
                            profile_pic={note.profile_pic}
                            title={note.title}
                            date={note.date}
                            description={note.description ? note.description.substring(0, 100) + "..." : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Preview;
