import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import MappedImagesTable from './MappedImagesTable'
import { getAllAvatars, patchUser } from '../../../Services/api-helper'

const ChangeAvatar = props => {
  const Container = styled.div`
    /* height: 500px; */
    width: 75%;
    background-color: grey;
    margin: 0 auto;
  `;

  const MainImage = styled.img`
    margin-top: 100px;
    border: 1px solid black;
    height: 190px;  
  `;

  const handleClickImage = (url, name) => {
    console.log(`selected ${name}`)
    setMainImage({
      source: url,
      html: <MainImage src={url} />
    })
  }

  const [allImages, setAllImages] = useState()
  // current profile picture is default mainImage
  const [mainImage, setMainImage] = useState({
    source: props.currentUser.image,
    html: <MainImage src={props.currentUser.image} />
  })


  useEffect(() => {
    getAllAvatars().then(ele => setAllImages(ele))
    // setMainImage({})
    // const setUser = 
    console.log(props)
  }, [])
  console.log(mainImage)
  return (
    <Container>
      {mainImage.html}
      {allImages && <MappedImagesTable mainImage={mainImage} patchUser={patchUser} handleClickImage={handleClickImage} imageList={allImages} />}

    </Container>

  );
}

export default ChangeAvatar;


// 1  on click 
// 2  select clicked avatar and assign it to state
// 3  top image is enlarged and showed selected image
//      - Current image by default, or grey if null
// 4  confirm selection -> set image src url to users image column
// 
// 
// 