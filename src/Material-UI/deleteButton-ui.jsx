import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Hourglass } from 'react-loader-spinner';

const DeleteButton = ({ onClick, disabled }) => {
  return (
    <Tooltip title="Delete">
      <IconButton type="button" onClick={onClick} disabled={disabled}>
        {disabled ? (
          <div style={{ width: '24px', height: '24px' }}>
            <Hourglass
              visible={true}
              height="20"
              width="16"
              ariaLabel="hourglass-loading"
              colors={['#757575', '#757575']}
            />
          </div>
        ) : (
          <DeleteIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
