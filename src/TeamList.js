import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ImageField,
  EditButton,
  DeleteButton,
} from "react-admin";

const TeamList = (props) => (
  <List {...props}>
    <Datagrid>
      <ImageField source="image" title="Team Member Image" />
      <TextField source="name" />
      <TextField source="position" />
      <ArrayField source="links" label="Links">
        <SingleFieldList>
          <ChipField source="url" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default TeamList;
