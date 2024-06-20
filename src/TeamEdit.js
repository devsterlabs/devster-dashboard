import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  FileInput,
  ImageField,
} from "react-admin";

const TeamEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ImageField source="image" title="Current Image" disabled />
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="position" />
      <ArrayInput source="links" label="Links">
        <SimpleFormIterator>
          <TextInput source="site" label="Website Title (e.g: LinkedIn)" />
          <TextInput source="url" label="URL" />
        </SimpleFormIterator>
      </ArrayInput>
      <FileInput source="file" label="Image" accept="image/*">
        <ImageField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);

export default TeamEdit;
