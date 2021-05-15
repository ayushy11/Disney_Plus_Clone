import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 4vw;
  position: relative;  
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;    
  }

`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 4rem 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  ${'' /* margin-left: 2rem; */}

`;

const PlayButton = styled.button`
  height: 56px;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  color: white;
  text-transform: uppercase;

`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }

`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

`;

const SubTitle = styled.div`
  font-size: 15px;
  color: white;
  min-height: 20px;
  margin-top: 26px;

`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;

`;

function Detail() {

  const { id } = useParams();
  const [ movie, setMovie ] = useState();
  // console.log(id);

  useEffect(() => {
    // grab movie data from db
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
      if(doc.exists){
        // save the movie data
        setMovie(doc.data());
      } else {
        // redirect
      }
    })
  }, [id]);

  console.log("Movie is", movie);

  return (
    <Container>
    { movie && (
      <>
      <Background>
        <img
          src={movie.backgroundImg}
        />
      </Background>
      <ImageTitle>
        <img
          src={movie.titleImg}
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>
          {movie.description}
      </Description>
      </>
    )
    }
      
    </Container>
  );
}

export default Detail;
