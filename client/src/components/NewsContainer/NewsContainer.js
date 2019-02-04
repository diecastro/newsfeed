import React, { Component } from 'react';
import Loading from '../Shared/Loading';
import styles from '../../styles/NewsFeed.scss';
import NewsPreview from './NewsPreview';
import NewsDialog from './NewsDialog';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsVisible: false,
      selectedNews: null
    };
    this.openNewsDialog = this.openNewsDialog.bind(this);
    this.closeNewsDialog = this.closeNewsDialog.bind(this);
  }

  componentDidMount() {
    this.props.getNews();
  }

  openNewsDialog(news) {
    this.setState({dialogIsVisible: true, selectedNews: news});
  };

  closeNewsDialog() {
    this.setState({dialogIsVisible: false, selectedNews: null});
  };

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
                  clickPreview={() => this.openNewsDialog(news)}
                  data={news}
                  key={index}
                />
              ))}
            </div>
          </div>
          {this.state.dialogIsVisible &&
          <NewsDialog
            closeDialog={this.closeNewsDialog}
            data={this.state.selectedNews}
            isVisible={this.state.dialogIsVisible}
          />}
        </div>
      );
    }
  }
}
