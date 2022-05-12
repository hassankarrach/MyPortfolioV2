import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import DesignCrowd from '../../../Media/Logo/DesignCrowd.png'
import Fiverr from '../../../Media/Logo/Fiverr.png'

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
    name : 'Flyers'
  },
  {
    id:4,
    name : 'Posters'
  },
  {
    id:5,
    name : 'Album Covers'
  },
]

//Data
const Data =[
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

function DesignWorks() {
  const [filtered ,setFiltered] = useState(Data);
  const [ActiveTag,setActiveTag]= useState('All');


  useEffect(()=>{
    const Filtered = ActiveTag==='All'? Data : Data.filter((item)=>{ return item.tag === ActiveTag});
    setFiltered(Filtered);
  },[ActiveTag])


  return (
    <StyledDesignWorks data-scroll-section>
      <div className='Container'> 
          <div className='Filter'>
              {
                 Tags.map(item =>{
                   return(
                     <div className={`Tag ${ActiveTag===item.name? "active":""} `} key={item.id} onClick={()=>{setActiveTag(item.name)}}>
                       <h4>{item.name}</h4>
                     </div>
                   )
                 })
               }
          </div>
          <motion.div className='Designs' layout
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit   ={{opacity:0}}
      >
               {
                 filtered.map(item =>{
                   return(
                     <motion.div layout className='item' key={item.id} >
                     </motion.div>
                   )
                 })
               }
          </motion.div>
          <div className='Freelance'>
            <div className='titleHolder'>
              <h2 className='title'>
              check my live freelancing works here :
              </h2>
            </div>

            <div className='FreelanceLinks'>
              <div className='item'>
                <h2>Fiverr</h2>
                <img className='LogoSite' src={Fiverr}/>
              </div>

              <div className='item'>
                <h2>Designcrowd</h2>
                <img className='LogoSite' src={DesignCrowd}/>
              </div>
            </div>
          </div>

      </div>
    </StyledDesignWorks>
  )
}

const StyledDesignWorks = styled.div`
height : auto;
display : flex;
justify-content : center;
align-items : center;
background-color : var(--White-Color);


.Container{
  height : 100%;
  width : 100vw;
  margin : 10px 9%;
  .Filter{
  height: 60px;
  display : flex;
  align-items : center;
  justify-content : center;
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

  .Designs{
         display: grid;
         grid-template-columns : 25% 25% 25% 25%;
         column-gap : 10px;
         row-gap: 10px;
         justify-items  : center;
         justify-content: center;
         align-items  :center;
         align-content:center;
         grid-auto-flow : row;

         padding: 10px;

         @media(max-width : 768px){
            grid-template-columns : 100%;
         }
         @media (min-width: 600px) {
           grid-template-columns: repeat(2, 0fr);
         }
         @media (min-width: 900px) {
           grid-template-columns: repeat(4, 0fr);
         }
         

        .item{
       width :360px;
       height :250px;
       background-color : white;
       border-radius :5px;
       transition: .25s ease-in-out; 
       overflow: hidden;
       position: relative;
       cursor: pointer;
       display : flex;
       align-items : center;
       justify-content : center;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
     }
  }

  .Freelance{
    width : 100%;
    height: 300px;
    background-color : white;
    margin-top : 50px;
    border-radius : 10px;
    display : flex;
    align-items :center;
    justify-content :space-around;

    h2{
      font-family: 'Lemon/Milk light', sans-serif;
    }
    .titleHolder{
      width :50%;
      display : flex;
      justify-content :center;
      .title{
        font-size : 1.5rem;
      }
    }
    .FreelanceLinks{
      width :50%;
      display :flex;
      flex-direction :column;
      justify-content :center;
      align-items :center;

      .item{
        background-color :blue;
        width : 80%;
        padding:30px 10px;
        display : flex;
        align-items :center;
        justify-content :space-around;
        border-radius : 10px;
        margin :5px;
        color : white;
        cursor: pointer;
        transition :0.2s ease-in-out;

        h2{
          text-align : left;
          width : 50%;
        }
        .LogoSite{
         width : 30%;
        }
      }

      .item:first-child{
        background: linear-gradient(90deg, rgba(29,191,115,1) 0%, rgba(19,125,75,1) 100%);
        transition: 0.2s ease-in-out;

        
        &:hover{
        border : 1px solid rgba(29,191,115,1);
        background: linear-gradient(90deg, white 20%, rgba(19,125,75,1) 100%);
        color :rgba(29,191,115,1);
        }
      }
      .item:nth-child(2){
        background: linear-gradient(90deg, rgba(34,140,190,1) 0%, rgba(27,111,150,1) 100%);

        &:hover{
        border : 1px solid rgba(34,140,190,1);
        background: linear-gradient(90deg, white 20%, rgba(27,111,150,1) 100%);
        color :rgba(34,140,190,1);
        }
      }
    }

  }
}

`

export default DesignWorks