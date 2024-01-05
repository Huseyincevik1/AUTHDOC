// FileViewer.jsx
import React from 'react';

const FileViewer = ({ fileUrl }) => {
  // Your file viewing logic here
  return (
    <div>
      {/* File viewing UI here */}
      <iframe src={fileUrl} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default FileViewer;