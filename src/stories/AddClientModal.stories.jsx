import React from "react";
import AddClientModal from "../components/AddClientModal";

export default {
    title: "Components/AddClientModal",
    component: AddClientModal,
    parameters: {
      docs: {
        description: {
          component: `The AddClientModal component presents a modal form for adding new clients. It includes input fields for client information and actions to save or cancel the client addition.`,
        },
      },
    },
  };

const Template = (args) => <AddClientModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClose: () => alert("Modal Closed"),
  onAddClient: (client) => alert(`Added Client: ${JSON.stringify(client)}`),
};
