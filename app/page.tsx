import Image from 'next/image'
import Link from 'next/link'

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
    <div>
       <Image 
          src="/linked-in-photo.png"
          alt="Anthony's Photo"
          width={200}
          height={500}
          className = "rounded-full"
        />
        <p>Web Developer</p>
        <p>Hello everyone, My name is Anthony, I am a passionate programmer focusing on full-stack web development. I love learning new things, especially studying new codebases and related frameworks. I also love working on Test Driven Development tasks to meet all the expected outputs from each stack(from back-end to front-end).</p>
        {links.map((link,index)=>{
          return(<>
          <Link
            key = {index}
            href={link.href}
            >
            <Image src={link.image} alt={`${link.name}link`} width={100}
          height={100} />
          </Link>
          </>)
        })}
        <a href="public/CV.pdf" download = "CV.pdf">Download my CV</a>
   </div>
   
      
      
    
    
  )
}
