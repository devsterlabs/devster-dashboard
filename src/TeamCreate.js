import React from "react";
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, FileInput, ImageField } from "react-admin";

const TeamCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);

export default TeamCreate;
