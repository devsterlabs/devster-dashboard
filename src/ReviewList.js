import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton } from 'react-admin';

const ReviewList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="client_name" />
            <TextField source='rating' />
            <TextField source='url' />
            <TextField source='comment' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ReviewList;
