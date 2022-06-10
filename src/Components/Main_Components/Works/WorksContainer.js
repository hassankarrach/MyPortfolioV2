import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
//LightBox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
//media
import Project1Gif from '../../../Media/Projects/Project1.gif'
import Project1 from '../../../Media/Projects/Project1.jpg'
import Project2Gif from '../../../Media/Projects/Project2.gif'
import Project2 from '../../../Media/Projects/Project2.jpg'
import Project3Gif from '../../../Media/Projects/Project3.gif'
import Project3 from '../../../Media/Projects/Project3.jpg'
import {Portfolio,abundeez} from '../Skills/SkillsData'
import {Data} from './DesignsData'
//icons
import {FaRegEye,FaGithub,FaGithubSquare,FaWrench} from 'react-icons/fa'
import { motion } from 'framer-motion'
import DesignCrowd from '../../../Media/Logo/DesignCrowd.png'
import Fiverr from '../../../Media/Logo/Fiverr.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//MaterialUI
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

//Gsap
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.defaults({ease: "power3"});
gsap.set(".item", {y: 10});
gsap.registerPlugin(ScrollTrigger);

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


//tags
const Tags =[
  {
    id:0,
    name : 'All'
  },
  {
    id:1,
    name : 'Photoshop Editing'
  },
  {
    id:2,
    name : 'Social media'
  },
  {
    id:3,
    name : 'Posters'
  },
  {
    id:4,
    name : 'Album Covers'
  },
]
//Data
const Data2 =[
  {
  id:1,
  title :'Graphic Design Edit',
  tag : 'Photoshop Editing'
  },
  {
    id:2,
    title :'Graphic Design Edit',
    tag : 'Photoshop Editing'
  } ,
  {
    id:3,
    title :'Graphic Design Edit',
    tag : 'Photoshop Editing'
  },
  {
    id:4,
    title :'Graphic Design Edit',
    tag : 'Flyers'
    },
    {
      id:5,
      title :'Graphic Design Edit',
      tag : 'Social media'
    } ,
    {
      id:6,
      title :'Graphic Design Edit',
      tag : 'Album Covers'
    } ,
    {
      id:7,
      title :'Graphic Design Edit',
      tag : 'Photoshop Editing'
      },
      {
        id:8,
        title :'Graphic Design Edit',
        tag : 'Social media'
      } ,
      {
        id:9,
        title :'Graphic Design Edit',
        tag : 'Flyers'
      } ,
      {
        id:10,
        title :'Graphic Design Edit',
        tag : 'Posters'
      },
      {
        id:11,
        title :'Graphic Design Edit',
        tag : 'Album Covers'
      },
      {
        id:12,
        title :'Graphic Design Edit',
        tag : 'Social media'
      }
]

function WorksContainer() {
  //Filter
  const [filtered ,setFiltered] = useState(Data);
  const [ActiveTag,setActiveTag]= useState('All');
  //lightbox
  const [isOpen ,setIsOpen]= useState(false);
  const [photoIndex ,setPhotoIndex]= useState();
  //Refs
  const WorksTitle = useRef(null);
  const GDWorksTitle = useRef(null);

  useEffect(()=>{
     const el = WorksTitle.current;
     const elGraphicDesign = GDWorksTitle.current;
     
     gsap.to(el,
      {
      scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
      },
      y: "50%",
      ease: 'none'
    })
     gsap.to(elGraphicDesign,
      {
      scrollTrigger: {
          trigger: elGraphicDesign,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
      },
      y: "20%",
      ease: 'none'
    })

    ScrollTrigger.batch(".itemAnimation", {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3,   // maximum batch size (targets)
  onEnter:     batch => gsap.to(batch, {autoAlpha: 1,  stagger: 0.15, overwrite: true}),
  onLeave:     batch => gsap.set(batch, {autoAlpha: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true})
  // you can also define things like start, end, etc.
    });

    ScrollTrigger.batch(".DevWorkItemAnimate", {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha: 1, y:0, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 0,  y: -100, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 1,y:0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, y: 100, overwrite: true})
  // you can also define things like start, end, etc.
    });

    ScrollTrigger.create({
      trigger: ".Section",
      start: "top 95%",
      end: "bottom top",
      duration: 1.25, 
      autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto",
      scrub: 1,
      onEnter: () => {
        gsap.to(".Section", {
          y: 0,
          duration: 1,
        });
      },
      onLeave: () => {
        gsap.to(".Section", {
          y: -100,
          duration: 1,
        });
      },
      onEnterBack: () => {
        gsap.to(".Section", {
          y: 0,
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(".Section", {
          y: 100,
          duration: 1,
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".WorkItemAnimation",
      start: "top bottom",
      end: "bottom top",
      duration: 1, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto",
      scrub: 1,
      onEnter: () => {
        gsap.to(".WorkItemAnimation", {
          y: 0,
          duration: 1,
          opacity : 1
        });
      },
      onLeave: () => {
        gsap.to(".WorkItemAnimation", {
          y: -100,
          duration: 1,
          opacity : 0
        });
      },
      onEnterBack: () => {
        gsap.to(".WorkItemAnimation", {
          y: 0,
          duration: 1,
          opacity : 1
        });
      },
      onLeaveBack: () => {
        gsap.to(".WorkItemAnimation", {
          y: 100,
          duration: 1,
          opacity : 0
        });
      }
    });

  },[])

  useEffect(()=>{
    const Filtered = ActiveTag==='All'? Data : Data.filter((item)=>{ return item.tag === ActiveTag});
    setFiltered(Filtered);
  },[ActiveTag])

  const handleChange = (event, value) => {
    setActiveTag(value.name);
  };


  return (
    <StyledContainer data-scroll-section id='Works'>
           <div className='DevContainer Section'>
             <DevWorkCard prv = {Project1} title='Wydad Website'  desc="wydad athletic club's unofficial website." techs={Portfolio} disabled/>
             <DevWorkCard prv = {Project2} gif={Project2Gif} preview='https://www.abundeez.com'  title='Abundeez - NFT minting website' desc="Nft minting website for Abundeez collection on the Ethereum blockchain." techs={abundeez}/>
             <DevWorkCard prv = {Project3} gif={Project3Gif} preview='/' title='Portfolio' sourceCode='https://github.com/hassankarrach/MyPortfolio' desc='My Personal Portfolio V2.0' techs={Portfolio}/>
    
             <div className='GithubButtonHolder'>
             <div className='GithubButton'>
                 <div className='LeftButton'><FaGithub className='Icon_'/></div>
                 <div className='RightButton'>
                   <a href='https://www.github.com/hassankarrach' target='_blank'>
                     <button>Github</button>
                   </a>
                 </div>
             </div>
             </div>
           </div>

           <div className='DesignContainer WorkItemAnimation'> 
          <div className='Filter' >
              {
                 Tags.map(item =>{
                   return(
                     <div className={`Tag ${ActiveTag===item.name? "active":""} `} key={item.id}
                       onClick={()=>{
                         setActiveTag(item.name);
                        }}>
                       <h4>{item.name}</h4>
                     </div>
                   )
                 })
               }
          </div>

          <div className='MobileFilter '>
          <Autocomplete
            id="checkboxes-tags-demo"
            className='checkBox'
            options={Tags}
            getOptionLabel={(option) => option.name}
            fullWidth
            onChange={handleChange}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8  }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            
            style={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} label="filter" placeholder="category" />
            )}
          />
          </div>

          
          <motion.div className='Designs' layout
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit   ={{opacity:0}}
      >
               {
                 filtered.map(item =>{
                   return(
                     <motion.div layout className='item itemAnimation' alt='design work' key={item.id} style={{backgroundImage:`url(${item.Prv})`}}
                     onClick={()=>{
                      setIsOpen(true);
                      setPhotoIndex(item.id-1)
                     }}
                     >
                     </motion.div>
                   )
                 })
               }


            {isOpen && (
            <Lightbox
            mainSrc={Data[photoIndex].Url}
            nextSrc={Data[(photoIndex + 1) % Data.length].Url}
            prevSrc={Data[(photoIndex + Data.length - 1) % Data.length].Url}
            onCloseRequest={() => setIsOpen(false)}

            onMovePrevRequest={() =>
                setPhotoIndex( (photoIndex + Data.length - 1) % Data.length)
            }
              
            onMoveNextRequest={() =>
                setPhotoIndex( (photoIndex + 1) % Data.length)
            }

            />
            )}
          </motion.div>
          
          <div className='FreelanceHolder '>
          <div className='Freelance'>
            <div className='titleHolder'>
              <h2 className='title'>
              Say Hello
              </h2>
              
              <div className='SayHelloIcons'>
                <a href='mailto:hassankarrach@outlook.fr?subject=From%20hassankarrach.com&body=%0D%0A'><EmailIcon fontSize="large" className='Icon'/></a>
                <a href='https://www.linkedin.com/in/hassankarrach/' target='_blank'><LinkedInIcon fontSize="large" className='Icon'/></a>
                <a href='https://wa.me/646838512' target='_blank'><WhatsAppIcon fontSize="large" className='Icon'/></a>
              </div>
            </div>

            <div className='FreelanceContent'>
              <h2 className='title'>
              more works here :
              </h2>

              <div className='Buttons'>
                <a href='https://www.fiverr.com/hassanjomaa' target='_blank'>
                <button className='FiverrButton'>
                <img width='25px' height='25px' src={Fiverr}  alt="Fiverr's logo"/>
                Fiverr
                </button>
                </a>
                
                <a href='https://www.designcrowd.com/designer/795552/hassan-karrach' target='_blank'>
                <button className='DesignCrowdButton'>
                <img width='25px' height='25px' src={DesignCrowd} alt="DesignCrowd's logo"/>
                DesignCrowd
                </button>
                </a>

              </div>
            </div>
          </div>
          </div>

           </div>

           <div className='DevTitle'>
               <h1 ref={WorksTitle}>Dev works</h1>
          </div>

          <div className='GraphicDesignTitle'>
               <h1 ref={GDWorksTitle}>Graphic Design</h1>
          </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
padding : 25px 0%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
position :relative;


&:before{
      content: "";
      height :85%;
      width : 100%;
      background-color : var(--White-Color);
      position : absolute;
      right : 0;
      z-index: -9; 
      @media (max-width : 768px){
      height :95%;
      }
}

.DevContainer{
transform :translateY(130px);
padding : 25px 3%;
width :82%;
border-radius : 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-bottom : 40px;
background-color : var(--White-Color);



@media (max-width : 768px){
    width : 94%;
    border-radius : 5px;
}


.GithubButtonHolder{
.GithubButton{
    border-radius :5px;
    border : 1px solid #10101a;
    background-color : transparent;
    color : #10101a;
    display :flex;
    align-items:center;
    flex-direction : row;
    width : 170px;
    margin-left: auto;
    height :35px;
    margin-top : 40px;

    @media (max-width :768px){
        width : 100%;
    }

    .LeftButton{
        height : 100%;
        padding: 10px;
        border-right : 1px solid #10101a;
        background : #10101a;
        display :flex;
        justify-content :center;
        align-items : center;
        .Icon_{
            color : white;
        }
    }
    .RightButton{
        width : 100%;
        button{
        background-color :transparent;
        width : 100%;
        border : none;
        cursor: pointer;
        font-family: 'Lemon/Milk light', sans-serif;
        font-size : 1.1rem;
        }
    }
}
}
}
.DesignContainer{
  transform :translateY(330px);
  height : 100%;
  width : 100%;
  padding : 10px 9%;

  @media (max-width : 768px){
  margin : 10px 0%;
  padding : 10px 0%;
  }
  .Filter{
  height: 60px;
  display : flex;
  align-items : center;
  justify-content : center;
  @media(max-width : 768px){
    display : none
  }
  .Tag.active{
    background-color : white;
  }
  .Tag{
    margin : 4px;
    background-color : transparent;
    border : 1px solid rgba(219, 214, 211, 0.5);
    padding : 10px 15px;
    border-radius : 4px;
    color : #373635;
    cursor: pointer;

    h4{
      font-family: 'Poppins';
    }
  }
  }

  .MobileFilter{
    display :none;
    background: linear-gradient(0deg, rgba(245,240,236,1) 0%, rgba(245,240,236,0.31416316526610644) 100%);
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
    @media (max-width :768px){
      display :block;
      width : 100%;
      padding : 10px;
      padding-top : 50px;
      position : sticky;
      top : 0;
      z-index :999;
    }
  }

  .Designs{
         --auto-grid-min-size: 16rem;
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
         grid-gap: 1rem;

         column-gap : 10px;
         row-gap: 10px;
         justify-items  : center;
         justify-content: center;
         align-items  :center;
         align-content:center;
         grid-auto-flow : row;
         padding: 10px;

         

        .item{
       width :100%;
       height :250px;
       background-color : white;
       border-radius :5px;
       transition: .25s ease-in-out; 
       overflow: hidden;
       position: relative;
       background-position: center;
       background-size :cover;
       cursor: pointer;
       display : flex;
       align-items : center;
       justify-content : center;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
     }
  }
  .FreelanceHolder{
    display :flex;
    justify-content :center;
    align-items :center;
    .Freelance{
    width : 100%;
    height: 300px;
    background: white;
    margin-top : 50px;
    border-radius : 10px;
    display : flex;
    align-items :center;
    justify-content :center;
    justify-content :space-around;
    overflow :hidden ;

    @media (max-width: 768px){
        flex-direction : column-reverse;
        width : 95%;
      }
    &:before{
      content: "";
      height :8%;
      width : 100%;
      background-color : var(--Bg);
      position : absolute;
      bottom :0;
      z-index: -99; 
      @media (max-width : 768px){
      height :2.5%;
      }
    }

    .titleHolder{
        width: 35%;
        height: 100%;
        font-family: 'Lemon/Milk light', sans-serif;
        text-align : left;
        font-size : 1.3rem;
        display :flex;
        flex-direction :column;
        justify-content :center;
        align-items: center;
        padding : 20px;
        color : var(--Bg);

        @media (max-width : 768px){
          width: 90%;
        }
        .SayHelloIcons{
          padding : 10px 15px;
          .Icon{
            margin : 0px 5px;
            color : var(--Bg);
            cursor : pointer;
            transition : 0.2s ease-in-out;
            &:hover{
              color : #2c2c47;
            }
          }
        }
    }
    .FreelanceContent{
      width : 65%;
      height: 100%;
      display :flex;
      justify-content :center;
      align-items :center;
      background-position :center;
      background-size : cover;
      background : linear-gradient(90deg, rgba(16,16,26,0.92) 0%, rgba(16,16,26,0.92)), url('https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80');
      flex-direction : column;
      color : white;

      
      @media (max-width : 768px){
          width: 100%;
        }

      h2{
        font-family: 'Lemon/Milk light', sans-serif;
      }
      .Buttons{
        display :flex;
        margin : 10px;
        a{
          text-decoration : none;
         .FiverrButton{
            background-color : #00b22d;
            &:hover{
            background-color : transparent;
            border : 1px solid white;
            }
            }

         .DesignCrowdButton{
            background-color : #238cbe;
            &:hover{
            background-color : transparent;
            border : 1px solid white;
            }
            }
        }

        button{
          border-radius : 5px;
          padding : 9px 15px;
          margin :5px;
          font-family: 'Lemon/Milk light', sans-serif;
          font-size : 1.2rem;
          display : flex;
          align-items : center;
          color :white;
          cursor: pointer;
          transition : 0.1s ease-in-out;
          border : none;
          img{
            width : 25px;
          }
        }
      }
    }
  }
}
  }




.GraphicDesignTitle{
  position : absolute;
  height: auto;
  font-size: 40px;
  font-weight: bold;
  writing-mode: vertical-rl;
  display: inline-block;
  font-family: 'Lemon/Milk light', sans-serif;
  top :50%;
  left:3%;
  @media (max-width :768px){
    display :none;
  }
  h1{
    color : var(--Bg);
  }
}
.DevTitle{
  position : absolute;
  height: auto;
  font-size: 40px;
  font-weight: bold;
  writing-mode: vertical-rl;
  display: inline-block;
  font-family: 'Lemon/Milk light', sans-serif;
  top :25px;
  left:3%;
  @media (max-width :768px){
    display :none;
  }
  h1{
    color : var(--Bg);
  }
}
`






const DevWorkCard = ({prv,gif,disabled,title,desc,techs,preview,sourceCode}) =>{
  return(
      <StyledDevWorkCard prv ={prv} gif={gif} className='DevWorkItemAnimate'>
          <div className='LeftDevWorkCard'>
          </div>
          <div className='RightDevWorkCard'>
              <h1>{title}<span className='Span'>{disabled? `(In developmenet)` :''}</span></h1>
              <p>{desc}</p>

              
              {
                  !disabled?
                  <>
                  <h2>Tech used :</h2>
                  <div className='List'>
                  {
                      techs.map((item ,key)=>{
                          return(
                              <div className='tag' key={key}>
                                  <h3>{item.name}</h3>
                              </div>
                          )
                      })
                  }
              </div>
              </>
              :''
              }

              <div className='Buttons'>
                 <a className='linkBut' href={preview} target='_blank'>
                   <button disabled={disabled? true:false} className={disabled? `disabled` :''}>View<FaRegEye className='InnerIcons'/></button>   
                 </a>
                 
                 <a className='linkBut' href={sourceCode} target='_blank'>
                   <button disabled={disabled? true:false} className={disabled? `disabled` :''}>Source code <FaGithub className='InnerIcons'/></button>
                 </a>
              </div>
          </div>
      </StyledDevWorkCard>
  )
}
const StyledDevWorkCard = styled.div`
width : 100%;
display : flex;
margin-bottom : 10px;
border-radius : 10px;
position : relative;
opacity :0;
transform :translateY(130px);

@keyframes anim-ss { 0% {background-position: 0%;} 100% {background-position: 100%;} }
@media (max-width :768px){
   flex-direction : column;
   background: linear-gradient(180deg,#fffcfa 0%, rgba(255,250,246,0) 100%);

   border-left : 1px solid rgba(171,168,165,0.2);
   border-right : 1px solid rgba(171,168,165,0.2);

   margin-bottom : 40px;
}

.LeftDevWorkCard{
   width : 30%;
   height: 240px; 
   background-image : url(${props=>props.prv});
   background-position : center;
   background-size :cover;
   border-radius : 10px;
   border : 1px solid #d1d1d1;
   animation: anim-ss steps(23) 30s infinite;
   :hover{
   background-image : url(${props =>props.gif? props.gif :props.prv});
   }
   @media (max-width :768px){
      width : 100%;
      border-radius : 8px;
      border-bottom-left-radius : 0px;
      border-bottom-right-radius : 0px;
   }
}

.RightDevWorkCard{
   width : 70%;
   margin-left :40px;
   display : flex;
   flex-direction : column;
   @media (max-width :768px){
      width : 100%;
      margin-left :0px;
      margin-bottom : 10px;
   }

   h1{
      font-family: 'Lemon/Milk light', sans-serif;
      display : flex;
      flex-direction : center;
      align-items :center;

      @media (max-width :768px){
      text-align :center;
      }

      Span{
      font-family: 'Poppins';
      text-transform : uppercase;
      font-size : 1.2rem;
      margin : 10px;
      }
   }
   h2{
      font-family: 'Lemon/Milk light', sans-serif;
      font-size : 20px;
      margin-bottom : 10px;
      color :#1f1f31;
      @media (max-width :768px){
      text-align :center;
      }
   }
   p{
      font-family: 'Poppins';
      font-size : 1.2rem;
      margin-bottom : 25px;
      @media (max-width :768px){
      text-align :center;
      }
   }

   .List{
      display : grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows   : auto;
      justify-content: left;
      grid-row-gap : 10px;
      @media (max-width :768px){
      grid-template-columns: auto auto;
      margin-bottom : 20px;
      justify-content :center;
      }
       .tag{
       background-color : #ece7e3;
       padding :5px 10px;
       border-radius : 5px;
       margin-right : 15px;
       @media (max-width :768px){
          border-radius : 4px;
       }
       h3{
          font-family: 'Poppins';
          color : #a09d9a;
          @media (max-width :768px){
              font-size : 15px;
          }
       }
       }
   }
   .Buttons{
       margin-left: auto;
       margin-top: auto;
       margin-top :15px;
       display :flex;
       flex-direction : row;


       @media (max-width :768px){
          width : 100%;
          margin-left: 0;
          margin-top: 0;
          justify-content :center;

          position :absolute;
          bottom : -15px;
      }
       
       .linkBut{
       text-decoration : none;
       

       .disabled{
          cursor: not-allowed;
          color : #797774;
       }
       button{
       font-family: 'Lemon/Milk light', sans-serif;
       padding : 5px 10px;
       border-radius :5px;
       border : 1px solid rgba(160,157,154, 0.4);
       background-color : transparent;
       color : #10101a;
       font-size : 1rem;
       display :flex;
       justify-content : center;
       align-items:center;
       flex-direction : row;
       cursor: pointer;
       .InnerIcons{
           margin-left :5px;
       }
       }
       button:first-child {
           margin-right : 6px;
       }
       }
       
   }
}
`

export default WorksContainer