import React from 'react';
import logo from '../../public/logo.jpg';
import { IoImageSharp } from "react-icons/io5";
import { LuScissorsLineDashed } from "react-icons/lu";
import { RiMegaphoneLine } from "react-icons/ri";
import { IoCodeSharp } from "react-icons/io5";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { LuFolder } from "react-icons/lu";
import { GoPersonAdd } from "react-icons/go";
import { MdHelpOutline } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsSortNumericUp } from "react-icons/bs";
import { RiEqualizerFill } from "react-icons/ri";
import { HiChatAlt2 } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { IoArchiveOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import hero from '../../public/logo.jpg';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
        <div className='z-50 relative'>
          <div className='bg-gray-400 md:p-2 md:w-full md:h-screen -mt-4'>
            <div className='bg-white text-sm font-semibold text-gray-800 font-sans rounded-md grid grid-cols-5 gap-4 md:w-full md:h-full m-0 p-0'>
              <div className='bg-white col-span-1 border border-solid border-gray-200 p-2 rounded-md md:relative h-2/4'>
                {/* link is yet to be added */}
                <div className='flex justify-center'>
                  <img src={logo} alt="logo" className='rounded-full size-14 absolute top-0 left-3 md:absolute md:top-2 md:size-8 md:left-1 md:rounded-lg'/>
                </div>
                <div className='flex justify-between'>
                  <div className='pl-8'>
                    {/* first column with its icons */}
                    <h3 className='font-extralight text-gray-400 text-xs'>INC</h3>
                    <h2 className='text-xs'>Tiara's Hub</h2>
                  </div>
                  <div className='border border-solid w-8 rounded-full'>
                  <IoImageSharp className='flex justify-center items-center w-full size-8 '/>
                  </div>
                </div>
                <nav className='mt-4'>
                  <ul className='space-y-2'>
                    <li className='border border-gray-100 rounded-md border-w-4/5 pl-4 py-2 flex justify-start items-start'> <LuScissorsLineDashed className='mr-3 size-5'/> Design team</li>
                    <li className='border py-2 border-gray-100 rounded-md border-w-4/5 pl-4 flex justify-start items-start'> <RiMegaphoneLine className='mr-3 size-4' />
                     Marketing team</li>
                    <li className='border py-2 border-gray-100 rounded-md border-w-4/5 pl-4 flex justify-start items-start'><IoCodeSharp className='mr-3 size-5'/>
                    Development team</li>
                  </ul>
                  {/* has a faint font */}
                  <p className='border py-2 border-gray-100 rounded-md border-w-4/5 pl-4 text-gray-300 flex justify-start items-start'><TbSquareRoundedPlus className='mr-3 size-5'/>Create a team</p>
                </nav>
                <div>
                  {/* folder will have a functional dropdown icon and faint font*/}
                  <div className='mt-4'>
                    <div className='flex justify-between'>
                      <p className='border border-transparent pl-4 text-gray-300'>FOLDERS</p>
                      <div>+</div>
                    </div>
                      <nav className='pl-4'>
                        <ul className='space-y-2'>
                          <li><div className='flex justify-between'><label htmlFor="product"><LuFolder className='mr-3 size-4'/>
                          Product</label>
                          <select name="product" id="product" className='w-4'>
                            <option value="roadmap">Roadmap</option>
                            <option value="feedback">Feedback</option>
                            <option value="performance">Perfomance</option>
                            <option value="team">Team</option>
                            <option value="analytics">Analytics</option>
                              {/* This element should have a plus icon added to it */}
                            <option value="addNewSub">Add new sub</option>
                          </select></div>
                          </li>
                          <li className='flex justify-start items-start'><LuFolder className='mr-3 size-4'/>
                          Sales</li>
                          <li className='flex justify-start items-start'><LuFolder className='mr-3 size-4' />
                          Design</li>
                          <li className='flex justify-start items-start'><LuFolder className='mr-3 size-4'/>
                          Office</li>
                          <li className='flex justify-start items-start'><LuFolder className='mr-3 size-4'/>
                          Legal</li>
                        </ul>
                      </nav>
                    </div>
                </div>
                {/* column's footer with icons */}
                <div className='flex pl-4 items-end mt-32 text-xs'>
                  <ul className='space-y-2'>
                    <li className='flex justify-start items-start'><GoPersonAdd className='mr-3 size-4'/> Invite teammates</li>
                    <li className='flex justify-start items-start'><MdHelpOutline className='mr-3 size-4'/>
                     Help and first steps</li>
                     {/* javascript is needed here */}
                    <div className='flex space-x-6'><li>days left on trial</li>
                    <li className='bg-slate-800 text-gray-300 w-14 text-xs rounded-md text-center'>add biling</li></div>
                  </ul>
                </div>
              </div>
              <div className='col-span-4 block rounded-md border border-solid border-gray-200 h-2/4 py-3 bg-white'>
                {/* <div>header section</div> use flex and space between transparent border likewise*/}
                <div className='flex justify-between px-3 pb-2'>
                  <h2>Product</h2>
                  <div className='flex space-x-3'>
                  <Link to="/login" className="text-gray-600 hover:bg-gray-400"><div>Login</div></Link>
                    <Link to="/register" className="text-gray-600 hover:bg-gray-400"><div>Sign up</div></Link>
                    <div><input type="text" placeholder='search hub' className='bg-gray-100 border border-solid rounded-md pl-5 relative'/><LuSearch className='absolute top-6'/>
                    </div>
                    <div className='flex justify-around w-14'><HiChatAlt2 className='size-5'/><CiSettings className='size-5'/>
                    </div>
                  </div>
                </div>
                <hr />
                {/* <div>sub-header section</div> */}
                <div className='flex justify-between mt-5'>
                {/* with drop icon */}
                <div className='flex justify-evenly gap-4 px-3 pb-2'>
                    <h4 className='flex justify-start items-start'><HiOutlineViewGrid className='mr-1 size-5'/>
                     All brands</h4>
                    <h4 className='flex justify-start items-start'>Desk</h4>
                    <h4>Tags</h4>
                    <h4 className='flex justify-start items-start'><BsSortNumericUp className='mr-1 size-5'/>
                    Sort</h4>
                    <h4 className='flex justify-start items-start'><RiEqualizerFill className='mr-1 size-5'/>
                     Filter</h4>
                  </div>
                  <div className='flex justify-evenly gap-4'>
                    <h4>Marketing</h4>
                    <h4 className='flex justify-start items-start pr-3'><CiImport className='mr-1 size-5'/>
                    Import/Export</h4>
                  </div>
                </div>
                <hr />
                {/* <div>Hero section</div> */}
                {/* <div>Footer section</div> */}
                <div className='flex justify-center items-center bg-gray-100 border border-gray-500 border-transparent h-2/3 mt-10 rounded-3xl p-1'>
                <img src={hero} alt="hub_visual" className='size-full rounded-3xl'/></div>
                <div className='flex mt-14 justify-center space-x-2'>
                  <div className='flex justify-start items-start pr-3'><TbCircleNumber3Filled className='mr-1 size-5'/>
                  Select</div>
                  <div className='flex justify-start items-start pr-3'><IoArchiveOutline className='mr-1 size-5'/>
                  Archive</div>
                  <div className='flex justify-start items-start pr-3'><MdDelete className='mr-1 size-5'/>
                  Delete</div>
                  <div><label>More</label>
                  <select name="dropdown" id="dropdown" className='w-5 ml-1'>
                    <option value="restore">Restore</option>
                    <option value="edit">Edit</option>
                    <option value="rename">Rename</option>
                  </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Dashboard