import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import styles from '../../styles/NewsCard.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NewsPreview = ({data, clickPreview}) => {
  return (
    <Card className={styles.newsCard}>
      <CardActionArea onClick={clickPreview}>
        <CardMedia className={styles.media} title={data.title} image={data.image}/>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.title}
          </Typography>
          <Typography component='p'>
            {data.preview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={clickPreview}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsPreview;
