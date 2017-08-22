import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page.scss';
import { navigation } from '../../../utils/navigation';

export default class Page extends Component {
  props: {
    active: string
  };


  render() {
    const { active } = this.props;
    return (
      <div>
        {navigation.map((json) =>
          <div className={active === json.link ? styles.guild+' '+styles.selected: styles.guild} key={json.key}>
            <div draggable="true">
              <div className={styles.guildInner} draggable="false">
                <Link className={styles.link} to={json.link} replace >{json.name}</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
