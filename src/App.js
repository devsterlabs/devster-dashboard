import React from "react";
import {
  Admin,
  Resource,
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import ClientList from "./ClientList";
import ReviewList from "./ReviewList";
import ReviewEdit from "./ReviewEdit";
import ServiceList from "./ServiceList";
import ServiceEdit from "./ServiceEdit";
import SubscriberList from "./SubscriberList";
import TeamList from "./TeamList";
import TeamCreate from "./TeamCreate";
import TeamEdit from "./TeamEdit";

const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <FileInput source="image" label="Client Logo" accept="image/*">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

const ReviewCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="client_name" />
      <TextInput source="comment" />
      <TextInput source="rating" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

const ServiceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="client"
      list={ClientList}
      create={ClientCreate}
    />
    <Resource
      name="reviews"
      list={ReviewList}
      edit={ReviewEdit}
      create={ReviewCreate}
    />
    <Resource
      name="services"
      list={ServiceList}
      edit={ServiceEdit}
      create={ServiceCreate}
    />
    <Resource name="subscribers" list={SubscriberList} />
    <Resource
      name="team"
      list={TeamList}
      edit={TeamEdit}
      create={TeamCreate}
    />
  </Admin>
);

export default App;
