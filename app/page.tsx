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
  const {nav} = style;
  return (
  <>
    <div id = "home"className = {style.home}>
    
      <div className = {nav}>
        <Link href = '#home'className = {style.navLink}>Home</Link>
        <Link href = '#projects'className = {style.navLink}>Projects</Link>
        <Link href = '#skills'className = {style.navLink}>Skills</Link>
        <Link href = '#education'className = {style.navLink}>Education</Link>
      
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
        <div className = {style.contact}>
        <p>Email: anthony.santiago58@yahoo.com</p>
        <p>Contact #: +64220458747</p>
        </div>
        
   </div>
   {/* Project Section */}
   <div id = "projects" className = {style.projects}>
        <p  className={style.font}>Projects</p>
        {/*  */}
        <div className = {style.projectContainer}>
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
          <li>- a simple project that replicates a Kanban Board where the user can add a backlog and move tasks to the next stages until it's done</li>
          </ul>
          </div>
        </div>
        {/* Skills Section */}
     <div id = "skills" className = {style.skills}>
      <p className = {style.font}>Skills</p>
      <div className = {style.skillsContainer}>
        <p className = {style.skillFont}>Technical Skills</p>
        <ul className={style.skillDescription}>
          <li>I mainly use HTML, CSS React.js, Javascript, TypeScript, Knex, Node.js, Sqlite3</li>
          <li>Building and Consuming API's</li>
          <li>Git and Github</li>
          <li>Test Driven Development using Javascript libraries</li>
          <li>Project Deployment using Vercel</li>
        </ul>
        <p className = {style.skillFont}>Human Skills</p>
        <div className = {style.hsContainer}>
          <span className = {style.hsFont}>Empathy & Listening</span>
          <span className = {style.hsFont}>Self Compassion</span>
          <span className = {style.hsFont}>Conflict Resolution</span>
          <span className = {style.hsFont}>Giving & Receiving Feedback</span>
          <span className = {style.hsFont}>Bias, Diversity and Inclusion</span>
        </div>
      </div>
      </div>
         {/*Education Section*/}
      <div id = "education" className = {style.skills}>
      <p className = {style.font}>Education</p>
      <div className = {style.eduContainer}>
        <p className = {style.eduFont}>Dev Academy Aotearoa</p>
        <p className = {style.dateFont}>Aug 2023 - Dec 2023</p>
        <p className = {style.eduDescription}>It's a 17-week web development boot camp that imitates a real-life development team. This course taught us a modern tech stack with a
            strong focus on human skills, collaboration, and working in a team using agile methodology. We were trained to work in pairs daily with an
            opportunity to give valuable feedback to each other and work on a larger group of 4-5 members before the weekends.
        </p>
        <p className = {style.eduFont}>Technological Institute of the Philippines</p>
        <p className={style.dateFont}>Jun 2012 - Apr 2016</p>
        <p className = {style.bsit}>Bachelor of Science in Information Technology</p>
        <ul className={style.eduDescription}>
        <li>This is the main foundation for my thirst for knowledge. I love working in the tech industry because I have a good understanding of general</li>
                  IT concepts
            <li>Studied 4 years of Database Administration using Oracle SQL, MSSQL, MYSQL</li>
            <li>Familiarity with programming languages such as C++, C#, and Java</li>
            <li>Data Structures (ArrayList, LinkedList, Stack, etc)</li>
            <li>Object Oriented Programming</li>
        </ul>
      </div>
      </div>
      
   </div>
   </>
      
      
    
    
  )
}
