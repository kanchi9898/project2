import React from 'react'
import Container from './Container'
import { MoveRight } from 'lucide-react'

const Section2 = () => {
    return (
        <Container>

            <div className="h-max md:h-[880px] lg:h-[454px] flex flex-col gap-[64px] items-center justify-center py-5 md:py-0">
                <div className="flex flex-col gap-[12px] items-center justify-center">
                    <h1 className="text-dblue font-semibold text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[2vw]">Messaging for all</h1>
                    <p className="text-lgray text-center hidden lg:block">User generated content in real-time will have multiple touchpoints for offshoring.</p>
                </div>

                <div className="hidden lg:grid lg:grid-cols-3 px-5 gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.27683 6.39124C8.52672 5.86906 8.66666 5.28422 8.66666 4.66669C8.66666 2.45755 6.8758 0.666687 4.66666 0.666687C2.45752 0.666687 0.666656 2.45755 0.666656 4.66669C0.666656 6.87583 2.45752 8.66669 4.66666 8.66669C5.28419 8.66669 5.86903 8.52675 6.39121 8.27686L8.43785 10.3235C7.73983 11.3774 7.33332 12.6412 7.33332 14C7.33332 15.3588 7.73983 16.6226 8.43785 17.6765L6.69071 19.4237C6.47041 19.3648 6.23887 19.3334 5.99999 19.3334C4.52723 19.3334 3.33332 20.5273 3.33332 22C3.33332 23.4728 4.52723 24.6667 5.99999 24.6667C7.47275 24.6667 8.66666 23.4728 8.66666 22C8.66666 21.7611 8.63525 21.5296 8.57633 21.3093L10.3235 19.5622C11.3774 20.2602 12.6412 20.6667 14 20.6667C15.3588 20.6667 16.6226 20.2602 17.6765 19.5622L19.7232 21.6088C19.4733 22.131 19.3333 22.7158 19.3333 23.3334C19.3333 25.5425 21.1242 27.3334 23.3333 27.3334C25.5425 27.3334 27.3333 25.5425 27.3333 23.3334C27.3333 21.1242 25.5425 19.3334 23.3333 19.3334C22.7158 19.3334 22.1309 19.4733 21.6088 19.7232L19.5621 17.6765C20.2602 16.6226 20.6667 15.3588 20.6667 14C20.6667 12.6412 20.2602 11.3774 19.5621 10.3235L21.3093 8.57636C21.5296 8.63528 21.7611 8.66669 22 8.66669C23.4727 8.66669 24.6667 7.47278 24.6667 6.00002C24.6667 4.52726 23.4728 3.33335 22 3.33335C20.5272 3.33335 19.3333 4.52726 19.3333 6.00002C19.3333 6.2389 19.3647 6.47044 19.4236 6.69075L17.6765 8.43788C16.6226 7.73986 15.3588 7.33335 14 7.33335C12.6412 7.33335 11.3774 7.73986 10.3235 8.43788L8.27683 6.39124Z" fill="white" />
                            </svg>
                        </div>
                        <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Easier Work Organization</h2>
                        <p className="text-lgray">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333313 15C0.333313 6.8998 6.8998 0.333313 15 0.333313C23.1002 0.333313 29.6666 6.8998 29.6666 15C29.6666 23.1002 23.1002 29.6666 15 29.6666C6.8998 29.6666 0.333313 23.1002 0.333313 15ZM15 4.33331C15.7364 4.33331 16.3333 4.93027 16.3333 5.66665V10.8518C16.3333 11.5882 15.7364 12.1852 15 12.1852C14.2636 12.1852 13.6666 11.5882 13.6666 10.8518V5.66665C13.6666 4.93027 14.2636 4.33331 15 4.33331ZM24.3333 16.3333C25.0697 16.3333 25.6666 15.7364 25.6666 15C25.6666 14.2636 25.0697 13.6666 24.3333 13.6666H19.1481C18.4117 13.6666 17.8148 14.2636 17.8148 15C17.8148 15.7364 18.4117 16.3333 19.1481 16.3333H24.3333ZM15 17.8148C15.7364 17.8148 16.3333 18.4117 16.3333 19.1481V24.3333C16.3333 25.0697 15.7364 25.6666 15 25.6666C14.2636 25.6666 13.6666 25.0697 13.6666 24.3333V19.1481C13.6666 18.4117 14.2636 17.8148 15 17.8148ZM10.8518 16.3333C11.5882 16.3333 12.1852 15.7364 12.1852 15C12.1852 14.2636 11.5882 13.6666 10.8518 13.6666H5.66665C4.93027 13.6666 4.33331 14.2636 4.33331 15C4.33331 15.7364 4.93027 16.3333 5.66665 16.3333H10.8518Z" fill="white" />
                            </svg>

                        </div>
                        <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Fast Connection</h2>
                        <p className="text-lgray">Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. </p>
                        <span className="text-blue font-semibold w-max flex items-center gap-2 text-start cursor-pointer lg:hidden">Learn more <MoveRight size={20} /></span>

                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11C24.9455 11 27.3333 8.61216 27.3333 5.66665C27.3333 2.72113 24.9455 0.333313 22 0.333313C19.0544 0.333313 16.6666 2.72113 16.6666 5.66665C16.6666 6.16961 16.7362 6.6563 16.8664 7.11763L9.78867 11.2463C8.82218 10.2708 7.48163 9.66665 5.99996 9.66665C3.05444 9.66665 0.666626 12.0545 0.666626 15C0.666626 17.9455 3.05444 20.3333 5.99996 20.3333C7.48163 20.3333 8.82218 19.7291 9.78867 18.7537L16.8664 22.8823C16.7362 23.3437 16.6666 23.8304 16.6666 24.3333C16.6666 27.2788 19.0544 29.6666 22 29.6666C24.9455 29.6666 27.3333 27.2788 27.3333 24.3333C27.3333 21.3878 24.9455 19 22 19C20.5183 19 19.1777 19.6042 18.2113 20.5796L11.1335 16.451C11.2637 15.9896 11.3333 15.5029 11.3333 15C11.3333 14.497 11.2637 14.0103 11.1335 13.549L18.2113 9.42033C19.1777 10.3958 20.5183 11 22 11Z" fill="white" />
                            </svg>

                        </div>
                        <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Streamlined Processes</h2>
                        <p className="text-lgray">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden px-5 gap-5">
                    <div className="flex gap-5 flex-col">
                        <div className="flex flex-col gap-3">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.27683 6.39124C8.52672 5.86906 8.66666 5.28422 8.66666 4.66669C8.66666 2.45755 6.8758 0.666687 4.66666 0.666687C2.45752 0.666687 0.666656 2.45755 0.666656 4.66669C0.666656 6.87583 2.45752 8.66669 4.66666 8.66669C5.28419 8.66669 5.86903 8.52675 6.39121 8.27686L8.43785 10.3235C7.73983 11.3774 7.33332 12.6412 7.33332 14C7.33332 15.3588 7.73983 16.6226 8.43785 17.6765L6.69071 19.4237C6.47041 19.3648 6.23887 19.3334 5.99999 19.3334C4.52723 19.3334 3.33332 20.5273 3.33332 22C3.33332 23.4728 4.52723 24.6667 5.99999 24.6667C7.47275 24.6667 8.66666 23.4728 8.66666 22C8.66666 21.7611 8.63525 21.5296 8.57633 21.3093L10.3235 19.5622C11.3774 20.2602 12.6412 20.6667 14 20.6667C15.3588 20.6667 16.6226 20.2602 17.6765 19.5622L19.7232 21.6088C19.4733 22.131 19.3333 22.7158 19.3333 23.3334C19.3333 25.5425 21.1242 27.3334 23.3333 27.3334C25.5425 27.3334 27.3333 25.5425 27.3333 23.3334C27.3333 21.1242 25.5425 19.3334 23.3333 19.3334C22.7158 19.3334 22.1309 19.4733 21.6088 19.7232L19.5621 17.6765C20.2602 16.6226 20.6667 15.3588 20.6667 14C20.6667 12.6412 20.2602 11.3774 19.5621 10.3235L21.3093 8.57636C21.5296 8.63528 21.7611 8.66669 22 8.66669C23.4727 8.66669 24.6667 7.47278 24.6667 6.00002C24.6667 4.52726 23.4728 3.33335 22 3.33335C20.5272 3.33335 19.3333 4.52726 19.3333 6.00002C19.3333 6.2389 19.3647 6.47044 19.4236 6.69075L17.6765 8.43788C16.6226 7.73986 15.3588 7.33335 14 7.33335C12.6412 7.33335 11.3774 7.73986 10.3235 8.43788L8.27683 6.39124Z" fill="white" />
                                </svg>
                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Easier Work Organization</h2>
                            <p className="text-lgray">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11C24.9455 11 27.3333 8.61216 27.3333 5.66665C27.3333 2.72113 24.9455 0.333313 22 0.333313C19.0544 0.333313 16.6666 2.72113 16.6666 5.66665C16.6666 6.16961 16.7362 6.6563 16.8664 7.11763L9.78867 11.2463C8.82218 10.2708 7.48163 9.66665 5.99996 9.66665C3.05444 9.66665 0.666626 12.0545 0.666626 15C0.666626 17.9455 3.05444 20.3333 5.99996 20.3333C7.48163 20.3333 8.82218 19.7291 9.78867 18.7537L16.8664 22.8823C16.7362 23.3437 16.6666 23.8304 16.6666 24.3333C16.6666 27.2788 19.0544 29.6666 22 29.6666C24.9455 29.6666 27.3333 27.2788 27.3333 24.3333C27.3333 21.3878 24.9455 19 22 19C20.5183 19 19.1777 19.6042 18.2113 20.5796L11.1335 16.451C11.2637 15.9896 11.3333 15.5029 11.3333 15C11.3333 14.497 11.2637 14.0103 11.1335 13.549L18.2113 9.42033C19.1777 10.3958 20.5183 11 22 11Z" fill="white" />
                                </svg>

                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Streamlined Processes</h2>
                            <p className="text-lgray">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:hidden">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3333 10.832C17.6336 10.2399 19.3333 8.15176 19.3333 5.66665C19.3333 2.72113 16.9455 0.333313 14 0.333313C11.0544 0.333313 8.66663 2.72113 8.66663 5.66665C8.66663 8.15176 10.3663 10.2399 12.6666 10.832V13.6666H8.66663C6.45749 13.6666 4.66663 15.4575 4.66663 17.6666V19.168C2.36632 19.7601 0.666626 21.8482 0.666626 24.3333C0.666626 27.2788 3.05444 29.6666 5.99996 29.6666C8.94548 29.6666 11.3333 27.2788 11.3333 24.3333C11.3333 21.8482 9.6336 19.7601 7.33329 19.168V17.6666C7.33329 16.9303 7.93025 16.3333 8.66663 16.3333H19.3333C20.0697 16.3333 20.6666 16.9303 20.6666 17.6666V19.168C18.3663 19.7601 16.6666 21.8482 16.6666 24.3333C16.6666 27.2788 19.0544 29.6666 22 29.6666C24.9455 29.6666 27.3333 27.2788 27.3333 24.3333C27.3333 21.8482 25.6336 19.7601 23.3333 19.168V17.6666C23.3333 15.4575 21.5424 13.6666 19.3333 13.6666H15.3333V10.832Z" fill="white" />
                                </svg>

                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Marketing Analytics</h2>
                            <p className="text-lgray">Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>
                        </div>

                    </div>
                    <div className="flex gap-5 flex-col">
                        <div className="flex flex-col gap-3">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333313 15C0.333313 6.8998 6.8998 0.333313 15 0.333313C23.1002 0.333313 29.6666 6.8998 29.6666 15C29.6666 23.1002 23.1002 29.6666 15 29.6666C6.8998 29.6666 0.333313 23.1002 0.333313 15ZM15 4.33331C15.7364 4.33331 16.3333 4.93027 16.3333 5.66665V10.8518C16.3333 11.5882 15.7364 12.1852 15 12.1852C14.2636 12.1852 13.6666 11.5882 13.6666 10.8518V5.66665C13.6666 4.93027 14.2636 4.33331 15 4.33331ZM24.3333 16.3333C25.0697 16.3333 25.6666 15.7364 25.6666 15C25.6666 14.2636 25.0697 13.6666 24.3333 13.6666H19.1481C18.4117 13.6666 17.8148 14.2636 17.8148 15C17.8148 15.7364 18.4117 16.3333 19.1481 16.3333H24.3333ZM15 17.8148C15.7364 17.8148 16.3333 18.4117 16.3333 19.1481V24.3333C16.3333 25.0697 15.7364 25.6666 15 25.6666C14.2636 25.6666 13.6666 25.0697 13.6666 24.3333V19.1481C13.6666 18.4117 14.2636 17.8148 15 17.8148ZM10.8518 16.3333C11.5882 16.3333 12.1852 15.7364 12.1852 15C12.1852 14.2636 11.5882 13.6666 10.8518 13.6666H5.66665C4.93027 13.6666 4.33331 14.2636 4.33331 15C4.33331 15.7364 4.93027 16.3333 5.66665 16.3333H10.8518Z" fill="white" />
                                </svg>

                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Fast Connection</h2>
                            <p className="text-lgray">Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. </p>
                            <span className="text-blue font-semibold w-max flex items-center gap-2 text-start cursor-pointer lg:hidden">Learn more <MoveRight size={20} /></span>

                        </div>
                        <div className="flex flex-col gap-3 lg:hidden">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0Z" fill="white" />
                                    <path d="M21.816 5.76931C21.3115 5.51225 20.7872 5.41716 20.26 5.37409C19.7606 5.33329 19.1543 5.33331 18.4514 5.33333L16 5.33334V6.66667C16 11.8213 11.8213 16 6.66667 16H5.33334L5.33333 18.4514C5.33331 19.1543 5.33329 19.7606 5.37409 20.26C5.41716 20.7872 5.51225 21.3115 5.76931 21.816C6.1528 22.5686 6.76473 23.1805 7.51737 23.564C8.02188 23.8211 8.54617 23.9162 9.0733 23.9592C9.5727 24 10.179 24 10.8818 24H18.4514C19.1542 24 19.7606 24 20.26 23.9592C20.7872 23.9162 21.3115 23.8211 21.816 23.564C22.5686 23.1805 23.1805 22.5686 23.564 21.816C23.8211 21.3115 23.9162 20.7872 23.9592 20.26C24 19.7606 24 19.1543 24 18.4515V10.882C24 10.1792 24 9.5727 23.9592 9.0733C23.9162 8.54617 23.8211 8.02188 23.564 7.51737C23.1805 6.76473 22.5686 6.1528 21.816 5.76931Z" fill="white" />
                                </svg>

                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Easier Integrations</h2>
                            <p className="text-lgray">Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
                            <span className="text-blue font-semibold w-max flex items-center gap-2 text-start cursor-pointer lg:hidden">Learn more <MoveRight size={20} /></span>

                        </div>
                        <div className="flex flex-col gap-3 lg:hidden">
                            <div className="h-[50px] w-[50px] rounded-[50%] p-2 bg-blue flex items-center justify-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.0572 9.27614L8.85411 17.4792C7.59886 15.2472 5.75278 13.4011 3.52077 12.1459L13.8248 1.84182C14.3528 1.3138 14.6169 1.0498 14.9213 0.950878C15.1891 0.863867 15.4775 0.863867 15.7453 0.950878C16.0498 1.0498 16.3138 1.31381 16.8418 1.84183L19.1582 4.15818C19.6862 4.6862 19.9502 4.95021 20.0491 5.25465C20.1361 5.52244 20.1361 5.8109 20.0491 6.07869C19.9502 6.38313 19.6862 6.64714 19.1582 7.17516L18.9428 7.39052L21.1381 9.58579C21.9191 10.3668 21.9191 11.6332 21.1381 12.4142L17.6095 15.9428C17.0888 16.4635 16.2446 16.4635 15.7239 15.9428C15.2032 15.4221 15.2032 14.5779 15.7239 14.0572L18.781 11L17.0572 9.27614Z" fill="white" />
                                    <path d="M1.68147 14.6222L0.682557 17.619C0.248292 18.9217 0.0311601 19.5731 0.18563 20.0063C0.320054 20.3833 0.616699 20.6799 0.993664 20.8144C1.42684 20.9688 2.07825 20.7517 3.38102 20.3174L6.37778 19.3185C6.52876 19.2682 6.64805 19.2284 6.74771 19.1931C5.6637 17.0669 3.93307 15.3363 1.80685 14.2523C1.77156 14.3519 1.73179 14.4712 1.68147 14.6222Z" fill="white" />
                                </svg>

                            </div>
                            <h2 className="text-dblue font-semibold text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">Workflow Builder</h2>
                            <p className="text-lgray">Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.</p>
                            <span className="text-blue font-semibold w-max flex items-center gap-2 text-start cursor-pointer lg:hidden">Learn more <MoveRight size={20} /></span>
                        </div>


                    </div>


                </div>
            </div>
        </Container>
    )
}

export default Section2