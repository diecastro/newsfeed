import React, { Component } from 'react';
import LinkButton from '../Shared/Button/LinkButton';
import routes from '../../constants/routes';
import styles from '../../styles/PageNotFound.scss';
import SentimentalNeutralFace from '@material-ui/icons/SentimentDissatisfied';

export default class PageNotFound extends Component {

  render() {

    return (
      <section className={styles.notFound}>
        <article className={styles.container}>
          <div className={styles.column}>
            <SentimentalNeutralFace className={styles.iconStyles} />
          </div>
          <div className={styles.column}>
            <h1 className={styles.heading}>{'Awkward'}</h1>
            <p>{'Maybe we messed up, or maybe you have fat fingers.'}</p>
            <p>{'Either way, this page does not exist.'}</p>
            <p>
              <LinkButton  {...this.props} linkRoute={routes.home} >
                  {'BACK TO HOME'}
              </LinkButton>
            </p>
          </div>
        </article>
      </section>
    );
  }
}
