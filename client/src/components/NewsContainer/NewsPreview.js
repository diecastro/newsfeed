import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import styles from '../../styles/NewsCard.scss';
import Typography from '@material-ui/core/Typography';

const NewsPreview = ({data}) => {
  return (
    <Card className={styles.newsCard}>
      <CardMedia className={styles.media} title={data.title} image={data.image}/>
      <Typography gutterBottom variant='h5' component='h2'>
        {data.title}
      </Typography>
      <Typography component='p'>
        {data.description}
      </Typography>
    </Card>
  );
};

export default NewsPreview;
