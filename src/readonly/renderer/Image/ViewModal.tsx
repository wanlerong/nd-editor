import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height: "90%",
  boxShadow: 6,
};

export interface ViewImageModalProps {
  open: boolean;
  setOpen: Function;
  src: string;
}

export default function ViewModal({open, setOpen, src}: ViewImageModalProps) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={src} alt="" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
        </Box>
      </Modal>
    </div>
  );
}
