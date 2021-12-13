import React from 'react';
import styled, { color } from '../../style';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const Wrapper = styled.div`
  display: flex;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: 'rgb(255, 255, 255)',
    },
  },
}));

const EmailCp = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <TextField
        required
        className={classes.root}
        id="outlined-required"
        label="enter your email address"
        variant="filled"
      />
      <Button />
    </Wrapper>
  );
};

export default React.memo(EmailCp);
