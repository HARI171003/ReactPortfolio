import React from 'react'
import './Header.css'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkIcon from '@mui/icons-material/Work';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ComputerIcon from '@mui/icons-material/Computer';

export const Header = () => {
  return (
    <div>
     <div className="Hcontainer">
        <div className="Logo">
            <label className='Logotext'>
                HARI
            </label>
        </div>
        <div className="menu">
            <ul className="menuitems">
                <li> <AutoStoriesIcon/>
                <span>Education</span>
                </li>
                <li><WorkIcon/>
                <span>Projects</span>
                </li>
                <li><ComputerIcon/>
                <span>Skills</span>
                </li>
                <li><InsertDriveFileIcon/>
                <span>Resume</span>
                </li>
                <li><PermContactCalendarIcon/>
                <span>Contact</span>
                </li>
              
            </ul>
        </div>
     </div>
    </div>
  )
}
