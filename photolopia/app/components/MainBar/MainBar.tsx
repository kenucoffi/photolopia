import React from 'react'
import Posts from './Posts'
import RightSidebar from '../Nav_bar/RightSidebar'

const MainBar = () => {
  return (
    <>
      <div className="flex flex-col ml-14 overflow-scroll justify-center">
          <Posts name='kenisa' porfolio='full-stack-developer' description='i am the owner of this website and i am full-stack-developer this is my home is it good' image='img1.jpg' profile='img1.jpg'/>
          <Posts name='abenu' porfolio='graphics designer' description='i am graphics designer and photographer this is my home is it good' image='img2.jpg' profile='img2.jpg'/>
          <Posts name='besu' porfolio='AI developer' description='i am AI developer this is my home is it good' image='img3.jpg' profile='img3.jpg'/>
          <Posts name='bereket' porfolio='mobile app developer' description=' i am mobile app developer this is my home is it good' image='img4.jpg' profile='img4.jpg'/>
          <Posts name='afewer' porfolio='data secintist' description='i am data secinitst this is my home is it good' image='img5.jpg' profile='img5.jpg'/>
          <Posts name='abdure' porfolio='java developer' description='i am java developerthis is my home is it good' image='img1.jpg' profile='img3.jpg'/>
      </div>
      
      <RightSidebar/>
    </>
  )
}

export default MainBar
