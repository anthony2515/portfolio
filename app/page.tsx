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
  return (<>
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
   <div id = "projects"className = {style.projects}>
        <p  className={style.font}>Projects</p>
        {/*  */}
        <div className = {style.projectContainer}>
          <div>
            <div className={style.projectImage}>asdf</div>
            <p className = {style.textColor}>CSS,HTML,Javascript,React.js, Node.js and Sqlite</p>
          </div>
          <div className={style.projectDesc}>
            asdf
          </div>
        </div>
        {/*  */}
        <div className = {style.projectContainer}>
          <div>
            <div className={style.projectImage}>asdf</div>
            <p className = {style.textColor}>CSS HTML Javascript React.js Node.js Sqlite</p>
          </div>
          <div className={style.projectDesc}>
            asdf
          </div>
        </div>
        {/*  */}
        <div className = {style.projectContainer}>
          <div>
            <div className={style.projectImage}>asdf</div>
            <p className = {style.textColor}>CSS,HTML,Javascript,React.js, Node.js and Sqlite</p>
          </div>
          <div className={style.projectDesc}>
            asdf
          </div>
        </div>
        
   </div>
   </>
      
      
    
    
  )
}
