import React from 'react'
import './Header.css'
import Buttons from '../Components/Buttons/Buttons'
import SocialBtn from '../Components/SocialBtn/SocialBtn';
import {Brightness7, Telegram, Instagram, LinkedIn, GitHub} from '@mui/icons-material';


export default function Header() {
  const clickHandler = () => {
    console.log("click");
  }

  return (
    <header>
      <div className='d-flex align-items-center gap-3'>
        <h1 className='text-white mb-0 fs-1'>سینا صفری</h1>
        <h6 className='m-0 fs-14'>توسعه دهنده فرانت اند</h6>
      </div>
      <div className='d-flex justify-content-between' style={{width: "30%"}}>
        <div className='d-flex gap-2 align-items-center'>
          <SocialBtn onClick={clickHandler} backgroundColor="#2FC0F0" icon={<Telegram sx={{ fontSize: "1.2rem", color: "white"}} />}></SocialBtn>
          <SocialBtn onClick={clickHandler} backgroundColor="#E41A66" icon={<Instagram sx={{ fontSize: "1.2rem", color: "white"}} />}></SocialBtn>
          <SocialBtn onClick={clickHandler} backgroundColor="#0A66C2" icon={<LinkedIn sx={{ fontSize: "1.2rem", color: "white"}} />}></SocialBtn>
          <SocialBtn onClick={clickHandler} backgroundColor="" icon={<GitHub sx={{ fontSize: "1.2rem" }} />} style={{backgroundColor: "#E01964"}}></SocialBtn>
        </div>
        <div className='d-flex align-items-center'>
          <Buttons onClick={clickHandler} icon={<Brightness7 sx={{ fontSize: "1.8rem" }} />}></Buttons>
        </div>
      </div>
    </header>
  )
}
