import React, { Component } from 'react';
import Loading from '../Shared/Loading';
import styles from '../../styles/NewsFeed.scss';
import NewsPreview from './NewsPreview';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const {application} = this.props;
    if (application.isFetching) {
      return (<Loading/>);
    } else {
      return (
        <div className={styles.newsFeedPage}>
          <div className={styles.wrapper}>
            <h1>Welcome to your news feed</h1>
            <div className={styles.newsCardWrapper}>
              {application.data.docs.map((news, index) => (
                <NewsPreview
                  data={news}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
