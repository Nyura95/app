import React, { Component } from 'react';
import styles from './Index.scss';
import { Link } from 'react-router-dom';

import { Table } from 'react-bootstrap';

function WarningBanner(props) {
  if (!props.corps) {
    return null;
  }

  const changeFolder = () => {

  }

  const { corps } = props;

  if(corps.type === "fichier") {
    return (
      <Link to={"/"} replace >{corps.name}</Link>
    );
  } else if(corps.type === "dossier") {
    return (
      <div onClick={changeFolder}>corps.name</div>
    );

  } else {
    return (
      <a href={corps.path+"/"+corps.name}>{corps.name}</a>
    );
  }
}

export default class TableDL extends Component {
  props: {
    corps: {file?:Array<any>, type?: string, return?: number, message?: string, pseudo?: string, token?: string, token?: string, autorisation?: number},
    header: Array<string>
  };
  constructor(props) {
    super(props);
    this.changeFolder = this.changeFolder.bind(this);
  }
  
  render() {
    return (
      <div className={styles.scrollable}>
        <Table  bordered condensed hover>
          <thead>
            <tr>
              {this.props.header.map((header, key) =>
                <th key={key}>{header}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.corps.file.map((corps, key) =>
              <tr key={key}>
                <td>{corps.type}</td>
                <td key={key}>
                  <WarningBanner corps={corps} />
                </td>
                <td>{corps.size}</td>
              </tr>
            )}
        </tbody>
      </Table>
      </div>
    );
  }
}
