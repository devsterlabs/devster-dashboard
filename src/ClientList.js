import React from 'react';
import { List, Datagrid, TextField, ImageField, DeleteButton } from 'react-admin';

const ClientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <ImageField source="image" title="title" />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ClientList;
