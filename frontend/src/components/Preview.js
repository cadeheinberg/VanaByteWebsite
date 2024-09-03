import React from 'react';
import Thumbnail from './Thumbnail';
import profile1 from "../assets/defaults/user1_solid.png";
import profile2 from "../assets/defaults/user1_solid.png";
import profile3 from "../assets/defaults/user1_solid.png";
import profile4 from "../assets/defaults/user1_solid.png";
import { motion } from 'framer-motion';

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
        new NoteDetails(-1, "Mackenzie S.", profile1, "What is HTML?", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Sam H.", profile2, "JavaScript and REACT", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Burt W.", profile3, "Apples and Windows", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus."),
        new NoteDetails(-1, "Carrie R.", profile4, "Camera Software", "08/23/2024", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna facilisis nisi, eget luctus tortor eros non purus.")
    ];

    return (
        <div className='bg-white w-full py-16'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
                    {notes.map((note, index) => (
                        <motion.div
                            key={index}
                            className='show'
                            initial={{ opacity: 0, x: -100, scale: 0.8, rotate: -10 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                damping: 12,
                                delay: 0, // delays each thumbnail slightly
                                bounce: .5,
                            }}
                            whileHover={{ scale: 1.05 }} // slightly scale up on hover
                            viewport={{ once: true, margin: '-50px 0px' }} // triggers when in view
                        >
                            <Thumbnail
                                noteid={note.noteid}
                                author={note.author}
                                profile_pic={note.profile_pic}
                                title={note.title}
                                date={note.date}
                                description={note.description ? note.description.substring(0, 400) + "..." : ""}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Preview;
