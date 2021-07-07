import React from 'react';
import {Container, Inner, Pane, Title, SubTitle, Image} from './styles/jumbotron';

export default function Jumbotron({children, direction = 'row', ...restProps}){
  console.log(Inner, 'Inner')
  return(
    <Inner direction={direction}>
    <p>{children}</p>
    </Inner>

  )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>

}

Jumbotron.Image = function JumbotronImage({children, ...restProps}){
  return <Image {...restProps}/>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}
