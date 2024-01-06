'use client'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/globals.module.css'
export default function Home() {
  const links =[
    {
      name:"LinkedIn",
      href:"https://www.linkedin.com/in/anthony-santiago-133a71bb/",
      image:"/linkedin.svg"
    },
    {
      name:"Github",
      href:"https://github.com/anthony2515",
      image:"/github.svg"
    }
  ]
  return (
  <>
    <div id = "home"className = {style.home}>
    
      <div className = {style.nav}>
        <Link href = '#home'className = {style.navLink}>Home</Link>
        <Link href = '#projects'className = {style.navLink}>Projects</Link>
        <Link href = '#'className = {style.navLink}>Skills</Link>
        <Link href = '#'className = {style.navLink}>Education</Link>
        <Link href = '#'className = {style.navLink}>Contact Me</Link>
      </div>
      <div className = {style.links}>
        {links.map((link,index)=>{
          return(
          
          <Link
            key = {index}
            href={link.href}
            
            >
            <Image src={link.image} alt={`${link.name}link`} width={55}
          height={55} className = {style.linkImage} />
          </Link>
          )
        })}
        
        <a href="/CV.pdf" className = {style.cv} download>CV</a>
        </div>
       <Image 
          src="/linked-in-photo.png"
          alt="Anthony's Photo"
          width={200}
          height={500}
          className = {style.image}
        />
        <p className = {style.pTitle}>Web Developer</p>
        
        <p className = {style.pDescription}>Hello everyone, My name is <span className ={style.span}>Anthony</span>, I am a passionate programmer focusing on full-stack web development. I love learning new things, especially studying new codebases and related frameworks. I also love working on Test Driven    Development tasks to meet all the expected outputs from each stack(from back-end to front-end).</p>
   </div>
   <div className = {style.projects}>
        <p  className={style.font}>Projects</p>
        {/*  */}
        <div id = "projects" className = {style.projectContainer}>
          <div>
            {/* Project Video */}
            <div className={style.projectImage}>
             
              <video width="500" height="100%" controls>
                <source src="/videos/tons-grocery.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <p className = {style.textColor}>CSS,HTML,Javascript,React.js, Node.js Sqlite Auth0</p>
          </div>

          {/* Project Description */}
          <div className={style.projectDesc}>
            <p className = {style.projectTitle}>Ton's Grocery</p>
            <ul className = {style.projectDescFont}>
             <li>It's a personal project that is inspired by cloning Mighty Ape. However, I’m still working on it as it has so many features to work on. But most importantly, I met my MVP(minimum viable product) to get this started. </li>
              <li>The MVP for this project is to add an admin page (no authentication yet) and the admin can add products and are able to upload an image of the product and post it on the home route</li>
              <li>After my MVP has met I added authentication for buyers</li>
              <li>I can see that this project have potential to be something big if im going to keep adding more features to it</li>
              <li>please check my github repo for this project to see the latest version</li>
              
            </ul>
          </div>
        </div>
        {/*  */}
        <div className = {style.projectContainer}>
          <div>
            <div className={style.projectImage}>
            <video width="500" height="100%" controls>
                <source src="/videos/hungry-games.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <p className = {style.textColor}>CSS HTML Javascript React.js Node.js Sqlite<strong> Google Maps API</strong></p>
          </div>
          <div className={style.projectDesc}>
          <p className = {style.projectTitle}>Hungry Games</p>
          <ul className = {style.projectDescFont}>
          <li>This is one of our group projects that I worked on and this is made for users who are confused about choosing a restaurant. The main goal of this project is to give them one random restaurant to go to. </li>
          <li>- My contribution to this project is to consume an API from Google Maps API to get the specific coordinates of the location that users typed and also made a delete functionality for users to delete some locations that they don't want on the list</li>
          </ul>
          </div>
        </div>
        {/*  */}
        <div className = {style.projectContainer}>
          <div>
            <div className={style.projectImage}>
            <video width="500" height="100%" controls>
                <source src="/videos/kanban-board.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <p className = {style.textColor}>CSS,HTML,Javascript,React.js, Node.js and Sqlite</p>
          </div>
          <div className={style.projectDesc}>
          <p className = {style.projectTitle}>Kanban Board</p>
          <ul className = {style.projectDescFont}>
          <li>- a simple personal project that replicates a Kanban Board where the user can add a backlog and move tasks to the next stages until it's done</li>
          </ul>
          </div>
        </div>
        
   </div>
   </>
      
      
    
    
  )
}
