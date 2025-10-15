import React from 'react';
import { Link } from 'react-router-dom';



export default function SideBar({ onLinkClick }) {
   
    return (
        <>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='flex justify-end items-end h-6 w-6 rounded-full'>
                            Profile picture
                            <div>update profile picture</div>
                        </div>
                        <div><p>Username</p></div>
                        <div>
                            <button className='h-4 w-1/4 rounded-full'>Account Setting</button>
                        </div>
                    </div>
                    <div>
                        <div>Links</div>
                        <div>Button
                            <button>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
