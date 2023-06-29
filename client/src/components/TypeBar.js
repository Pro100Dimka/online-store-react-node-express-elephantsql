import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Box>
      <List
        variant="outlined"
        sx={{
          border: '1px solid rgba(128, 128, 128, 0.5)',
          borderRadius: '10px',
        }}
      >
        {device._types.map((type, key) => (
          <ListItem
            sx={{
              borderBottom:
                key !== device._types.length - 1 &&
                '1px solid rgba(128, 128, 128, 0.5)',
            }}
            disablePadding
            key={type.id}
          >
            <ListItemButton
              style={{ cursor: 'pointer' }}
              selected={type.id === device._selectedType.id}
              onClick={() => device.setSelectedType(type)}
            >
              <ListItemText primary={type.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default TypeBar;
