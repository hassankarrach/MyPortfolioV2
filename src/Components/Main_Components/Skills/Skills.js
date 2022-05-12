import React from 'react';
import styled from 'styled-components';
//media
import BC from '../../../Media/Skills/Blockchain.jpg';
import WebDev from '../../../Media/Skills/Web.jpg';
import GraphicDesign from '../../../Media/Skills/Design.jpg';
//icons
import {Blockchain,Web,Design} from './SkillsData'
//Swiper
import SwiperCore,{ Navigation, Pagination,Autoplay} from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);


function Skills() {
  return (
    <StyledSkills data-scroll-section>
        <Swiper 
        loop={true} 
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false
        }}
        navigation={true} 
        className="mySwiper">

          <SwiperSlide className='item'>
            <StyledCard thumb={BC} Title='Blockchain Development' Desc='Creating Decentralized Applications (DApps) on the Ethereum Blockchain.' techs={Blockchain}/>
          </SwiperSlide>

          <SwiperSlide className='item'>
            <StyledCard thumb={WebDev} Title='Web Developer' Desc='I create modern websites!' techs={Web}/>
          </SwiperSlide>

          <SwiperSlide className='item'>
            <StyledCard thumb={GraphicDesign} Title='Graphic Design' Desc='i can make your ideas more and more attractive.' techs={Design}/>
          </SwiperSlide>

        </Swiper>
    </StyledSkills>
  )
}


const StyledSkills = styled.div`
padding : 0 9%;
.item{
display :flex;
justify-content :center;
align-items :center;
}
`


const StyledCard = ({techs, Title,Desc,thumb}) =>{
    return(
        <StyledCard_>
            <div className='Left' style={{backgroundImage :`url(${thumb})`}}>
            </div>
            <div className='Right'>
                <div className='TitleHolder'>
                    <h1>{Title}</h1>
                </div>
                <div className='Content'>
                    <p>{Desc}</p>
                    <div className='theHolderOfIconsHolder😂'>
                       <h3 className='techTitle'>techs :</h3>
                       <div className='IconsHolder'>
                           {
                              techs.map((item,key)=>{
                                return(
                                    <Icon iconImg={item.url} iconName={item.name} key={key}/>
                                )
                               })
                           }
                       </div>
                    </div>
                </div>
            </div>
        </StyledCard_>
    )
}

const StyledCard_ = styled.div`
width : 75%;
height: auto;
background: rgba( 16, 16, 26, 0.25 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.03 );
color : white;
border-radius : 13px;
display : flex;
overflow : hidden;


@media (max-width :768px){
    flex-direction : column;
    width : 100%;
    height: 60vh;
}

h1{
    font-family: var(--font-primary);
    text-transform : uppercase;
}

p{
    font-family: 'Poppins';
    font-size : 1.2rem;
}

.Left{
    width : 30%;
    background-position : center;
    background-size  : cover;
    @media (max-width :768px) {
    width : 100%;
    height: 30%;
    }
}
.Right{
width : 70%;
padding : 30px 10px;
margin-left : 30px;
display : flex;
flex-direction : column;

@media (max-width :768px) {
    width : 100%;
    height : 70%;
    margin-left : 0px;
}

.TitleHolder{
    height : 20%;
    display : flex;
    align-items :center;
}
.Content{
    height : 80%;
    display : flex;
    flex-direction :column;
    
   .theHolderOfIconsHolder😂{
   display :flex;
   flex-direction : column;
   justify-content : center;
   height : 100%;
   .techTitle{
    font-family: var(--font-primary);
    text-transform : uppercase;
    margin-bottom : 12px;
   }
    .IconsHolder{
        width : 100%;
        display : grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows   : auto;
        justify-content: left;
        grid-row-gap : 10px;

        @media (max-width :1150px) {
        grid-template-columns: 50% 50%;
        }
    }
   }

}
}
`
const Icon = ({iconImg,iconName}) => {
    return(
        <StyledIcon>
            <div className='Left_'>
                <img className='SkillIcon' src={iconImg}/>
            </div>
            <div className='Right_'>
                <h3>{iconName}</h3>
            </div>
        </StyledIcon>
    )
}


const StyledIcon = styled.div`
 width : 95%;
 height : 35px;
 background-color : #26263e;
 border-radius :6px;
 display : flex;
 overflow : hidden;

 .Left_{
     width : 25%;
     background-color :#333353;
     display :flex;
     justify-content : center;
     align-items : center;
     .SkillIcon{
         width : 18px;
     }
 }
 .Right_{
     color : white;
     display :flex;
     justify-content : center;
     align-items : center;
     width : 75%;
     text-transform : uppercase;
     font-family: "D-DIN Condensed";
 }
`

export default Skills