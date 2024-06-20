import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton } from 'react-admin';

const ServiceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ServiceList;
