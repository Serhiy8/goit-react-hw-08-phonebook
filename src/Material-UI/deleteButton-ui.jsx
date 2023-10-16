import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const DeleteButton = ({ onClick }) => {
  return (
    <Tooltip title="Delete">
      <IconButton type="button" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
