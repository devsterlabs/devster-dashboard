import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ReviewEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="client_name" />
            <NumberInput source="rating" />
            <TextInput source="url" />
            <TextInput source="comment" multiline />
        </SimpleForm>
    </Edit>
);

export default ReviewEdit;
