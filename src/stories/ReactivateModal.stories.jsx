import React from "react";
import ReactivateModal from "../components/ReactivateModal";

export default {
    title: "Components/ReactivateModal",
    component: ReactivateModal,
    parameters: {
      docs: {
        description: {
          component: `The ReactivateModal component displays a modal for reactivating a client's status. It includes a confirmation message and buttons to either confirm or cancel the reactivation action. This modal is useful for restoring clients who were previously deactivated.`,
        },
      },
    },
  };
const client = {
  clientName: "Sophia Martinez",
};

const Template = (args) => <ReactivateModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  client,
  onReactivate: (client) => alert(`Reactivated ${client.clientName}`),
  onClose: () => alert("Modal Closed"),
};
