import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          Drag the files here...
          <span role="img" aria-label="attachment">
            📎
          </span>
          <span role="img" aria-label="hand">
            👇
          </span>
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Unsupported file type ⚠</UploadMessage>;
    }

    return (
      <UploadMessage type="success">
        Drop the files here...
        <span role="img" aria-label="attachment">
          📎
        </span>
        <span role="img" aria-label="hand">
          👇
        </span>
      </UploadMessage>
    );
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({
          getRootProps, getInputProps, isDragActive, isDragReject,
        }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
