// @flow
import React, { Component } from 'react';
import styles from './Download.scss';

import { Button } from 'react-bootstrap';

import NavigationLeft from './layout/navigationLeft/';
import NavigationTop from './layout/NavigationTop/';

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import TableDL from './layout/TableDL/';

class Download extends Component {
  props: {
    getFolder: () => void,
    path: string,
    api: {file?:Array<any>, type?: string, return?: number, message?: string, pseudo?: string, token?: string, token?: string, autorisation?: number}
  };

  render() {
    const { api, path, getFolder } = this.props;
    return (
      <div data-tid="container" className={"containers"}>
        <NavigationLeft path={path}/>
        <NavigationTop />
        <div id={"container"} className={'container-fluid'} >
          <Button onClick={getFolder}>test</Button>
          <TableDL header={["Type", "Nom", "Taille"]} corps={api} />
        </div>
      </div>
    );
  }
}

export default Download;
