
import React, { Component } from 'react';
import { Panel, Icon } from '../../components';

import '../styles/pages/IconPage';

class IconPage extends Component {

  render() {
    return (
      <div className="icon-page">
        <Panel>
          <Panel.Header>
            <Panel.Title>Icon图标</Panel.Title>
          </Panel.Header>
          <Panel.Body>
            <Icon type="check" theme="success" />
            <Icon type="check-round" theme="success" />
            <Icon type="check-round-fill" theme="success" />
            <Icon type="close" theme="error" />
            <Icon type="close-round" theme="error" />
            <Icon type="close-round-fill" theme="error" />
            <Icon type="info-round" theme="info" />
            <Icon type="info-round-fill" theme="info" />
            <Icon type="question-round" />
            <Icon type="question-round-fill" />
            <Icon type="warning-round" theme="warning" />
            <Icon type="warning-round-fill" theme="warning" />
            <Icon type="arrow-left" />
            <Icon type="arrow-right" />
            <Icon type="arrow-top" />
            <Icon type="arrow-bottom" />
            <Icon type="add" />
            <Icon type="minus" />
            <Icon type="minus-round" />
            <Icon type="minus-round-fill" />
            <Icon type="date" />
            <Icon type="loading" />
          </Panel.Body>
        </Panel>

      </div>
    );
  }
}

export default IconPage;