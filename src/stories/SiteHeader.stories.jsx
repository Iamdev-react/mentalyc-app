import React from "react";
import SiteHeader from "../components/SiteHeader";

export default {
    title: "Components/SiteHeader",
    component: SiteHeader,
    parameters: {
      docs: {
        description: {
          component: `The SiteHeader component is a simple header that displays the title of the application. It is customizable by passing a different title as a prop.`,
        },
      },
    },
  };
  
  const Template = (args) => {
    return <SiteHeader {...args} />;
  };
  
  export const Default = Template.bind({});
  Default.args = {
    title: "My Application Header",
  };