import React, { useContext } from "react";
import { Box, Button, Group, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../utils/common";

// import { useAuth0 } from "@auth0/auth0-react";
// import UserDetailContext from "../context/userDetailContext";
// import useProperties from "../hooks/useProperties";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";
// import { createResidency } from "../utils/api";

const BasicDetails = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) => (value < 999 ? "Must be minimum 999 dollars" : null),
    },
  });

  const { title, description, price } = form.values;

  const handleSubmit = () => {
    const { hasError } = form.validate();
    if (!hasError) {
      setPropertyDetails((prev) => ({
        ...prev,
        title,
        description,
        price,
      }));
      nextStep();
    }
  };

  //   const { user } = useAuth0();
  //   const {
  //     userDetails: { token },
  //   } = useContext(UserDetailContext);
  //   const { refetch: refetchProperties } = useProperties();

  //   const { mutate, isLoading } = useMutation({
  //     mutationFn: () =>
  //       createResidency(
  //         {
  //           ...propertyDetails,
  //           facilities: { bedrooms, parkings, bathrooms },
  //         },
  //         token,
  //         user?.email
  //       ),
  //     onError: ({ response }) =>
  //       toast.error(response.data.message, { position: "bottom-right" }),
  //     onSettled: () => {
  //       toast.success("Added Successfully", { position: "bottom-right" }),
  //         setPropertyDetails({
  //           title: "",
  //           description: "",
  //           price: 0,
  //           country: "",
  //           city: "",
  //           address: "",
  //           image: null,
  //           facilities: {
  //             bedrooms: 0,
  //             parkings: 0,
  //             bathrooms: 0,
  //           },
  //           userEmail: user?.email, //ensure userEmail is included in PropertyDetails
  //         });
  //         setOpened(false)
  //         setActiveStep(0)
  //         refetchProperties()
  //     },
  //   });

  return (
    <Box maw={"50%"} mx="auto" my={"md"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Description"
          placeholder="Description"
          {...form.getInputProps("description")}
        />

        <NumberInput
          withAsterisk
          label="Price"
          placeholder="999"
          min={0}
          {...form.getInputProps("price")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Go Back
          </Button>
          <Button type="submit">
          Next
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
