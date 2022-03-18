import React from 'react';
import { useMutation } from 'react-query';
import request from '../request';

interface UploadRequest {
  id: string;
  file: Blob | File;
}

export const useUpload = () => {
  const [progress, setProgress] = React.useState(0);
  const mutationObject = useMutation((data: UploadRequest) => {
    const formData = new FormData();
    formData.append('file', data.file);
    return request
      .post(`/dish/image/${data.id}`, formData, {
        headers: {
          'Content-Type': data.file.type,
        },
        onUploadProgress: (progressEvent) => {
          const progressAmount = Math.floor(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(progressAmount);
        },
      })
      .then((res) => res.data);
  });
  return { progress, ...mutationObject };
};
