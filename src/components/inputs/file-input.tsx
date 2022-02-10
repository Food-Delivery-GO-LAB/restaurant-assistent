import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

interface Props {
  id?: string;
  accept?: 'image/*' | 'video/*';
  label?: string;
}

const FileInput = React.forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <Input
    label={props.label ?? ''}
    id={props.id}
    type="file"
    ref={ref}
    onChange={(e) => e.target.files}
    accept={props.accept}
    {...props}
  />
));
export default FileInput;
