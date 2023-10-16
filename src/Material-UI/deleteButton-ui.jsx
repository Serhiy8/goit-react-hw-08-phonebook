import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const DeleteButton = ({ onClick, disabled }) => {
  return (
    <Tooltip title="Delete">
      <IconButton type="button" onClick={onClick} disabled={disabled}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
